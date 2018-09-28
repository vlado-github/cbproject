import { sequelize } from '../dbcontext';
import { Sequelize } from 'sequelize';
import { Model } from './model';

export class RouteDB extends Model {
    constructor() {
        super();
        this.model = sequelize.define('routes', {
            name: {
                type: Sequelize.STRING
            },
            grade: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            photo: {
                type: Sequelize.STRING
            },
            gymID: {
                type: Sequelize.INTEGER
            },
        });
    }
}

