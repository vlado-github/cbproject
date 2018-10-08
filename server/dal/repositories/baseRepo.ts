
import { sequelize } from '../dbcontext'
import { Model } from 'sequelize-typescript';
import Route from '../modeli/route'


Route.update({name: "Igor", grade:"konj"}, {where: {id: 2}})

export class BaseRepo<T extends Model<T>> {
    protected model: any;

    async create(item: T): Promise<T> {
        await sequelize.sync();
        await item.save();
        return item;
    }
    async update(id: number, obj): Promise<T>{
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
}
