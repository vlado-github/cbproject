import { BaseRepository } from './baseRepository'
import Route from '../models/route'


export class RouteRepository extends BaseRepository<Route> {
    constructor(){
        super();
        this.model = Route;
    }

   
}
