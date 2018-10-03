import { Base2Repository } from './base2Repository';
import { Route } from '../models/route';


export class Route2Repository extends Base2Repository<Route> {
    constructor(){
        super();
        this.modelName = "Route";
    }
}