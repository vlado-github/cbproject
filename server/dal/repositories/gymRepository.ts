import { BaseRepository } from './baseRepository'
import Gym from '../models/gym'
import { sequelize } from '../dbcontext'


export class GymRepository extends BaseRepository<Gym> {
    constructor(){
        super();
        this.model = Gym;
    }

    async getGymList(){
        let list = []
        await sequelize.sync();
        await (list = this.model.findAll(
            {
                attributes: ['id', 'name', 'city']
              }
        ))
        return list;
    }
}

