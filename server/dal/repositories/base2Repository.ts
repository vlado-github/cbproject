import models from '../models';
import { IRead } from "./interfaces/readInterface";


export abstract class Base2Repository<T> implements IRead<T>{
    public modelName: string;

    getByID(id: number){
        models.sequelize.sync()
            .then(() => {
                models[this.modelName].findOne({ 
                    where: { 
                        id: id 
                    } 
                }).then(obj => {
                    console.log(obj.dataValues)
                })
                
            }
            )
    }
}


