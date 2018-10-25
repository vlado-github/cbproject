import { sequelize } from '../dbcontext'
import { Model } from 'sequelize-typescript';
import { IWrite } from './interfaces/writeInterface';
import { IRead } from './interfaces/readInterface';

export class BaseRepository<T extends Model<T>> implements IWrite<T>,IRead<T>{
    protected model: any;

    async create(item: T): Promise<T> {
        await sequelize.sync();
        await item.save();
        return item;
    }
    async update(id: number, obj: Object): Promise<T>{
        let updatedModel;
        await sequelize.sync()
        await this.model.update(obj, {where: {id: id}})
        await (updatedModel= this.model.findById(id));
        return updatedModel;
    };

    async findById(id: number): Promise<T>{
        let myModel;
        await sequelize.sync();
        await (myModel = this.model.findById(id))
        return myModel;
    };

    //todo: use param, never return all
    async findAll(): Promise<T>{
        let list;
        await sequelize.sync();
        await (list = this.model.findAll())
        return list;
    }
}
