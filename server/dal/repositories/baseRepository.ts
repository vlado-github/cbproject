import { IRead } from "./interfaces/readInterface";
import { Write } from "./interfaces/writeInterface";
import { Model } from '../entities/model'

import { sequelize } from '../dbcontext';

export abstract class BaseRepository<T, G extends Model> implements Write<T, G>{
    save (obj: T, dbmodel: G) {
        sequelize.sync()
            .then(() => dbmodel.getModel().create(obj))
            .then(jane => {
                console.log(jane.toJSON());
            })
    }
}

