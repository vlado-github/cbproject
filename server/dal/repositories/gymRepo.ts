import { BaseRepo } from './baseRepo'
import Gym from '../modeli/gym'
import { sequelize } from '../dbcontext'


export class GymRepo extends BaseRepo<Gym> {
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

