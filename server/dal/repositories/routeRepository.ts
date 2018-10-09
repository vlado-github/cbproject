import { BaseRepository } from './baseRepository'
import Route from '../models/route'
import { sequelize } from '../dbcontext'



export class RouteRepository extends BaseRepository<Route> {
    constructor(){
        super();
        this.model = Route;
    }

    async findByQueryParam(gymId: number): Promise<Route>{
        let list;
        await sequelize.sync();
        await (list = this.model.findAll({where: {gymId: gymId}}))
        return list;
    }
   
}
