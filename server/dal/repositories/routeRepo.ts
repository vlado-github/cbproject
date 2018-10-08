import { BaseRepo } from './baseRepo'
import Route from '../modeli/route'


export class RouteRepo extends BaseRepo<Route> {
    constructor(){
        super();
        this.model = Route;
    }

   
}
