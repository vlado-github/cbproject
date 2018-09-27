import { sequelize } from '../dbcontext';
import { Sequelize } from 'sequelize';

export class Route {
  public model;
  constructor() {
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