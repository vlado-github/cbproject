import { sequelize } from '../dbcontext';
import { Sequelize } from 'sequelize';

export class Gym {
  public model;
  constructor() {
    this.model = sequelize.define('gyms', {
      name: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      }
    })
  }
}