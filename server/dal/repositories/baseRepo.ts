import { IWrite } from "./interfaces/writeInterface";
import { sequelize } from '../dbcontext'
import { Model } from 'sequelize-typescript';
//import * as Promise from 'bluebird';



export class BaseRepo<T extends Model<T>> {
    async create(item: T): Promise<T> {
        await sequelize.sync({force: true})
        await item.save()  
        return item;
    }
}
