import Sequelize from 'sequelize';
import {sequelize} from '../dbcontext'


const db = {
    User: sequelize.import('./user'),
    Route: sequelize.import('./route'),
    Gym: sequelize.import('./gym'),
    sequelize: sequelize
  };
  
  Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db);
    }
  });
  
  //db.sequelize = sequelize;
  // db.Sequelize = Sequelize;
  
  export default db;
