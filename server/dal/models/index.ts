import {sequelize} from '../dbcontext'


const db = {
    Route: sequelize.import('./routeDB'),
    Gym: sequelize.import('./gymDB'),
    sequelize: sequelize
  };
  // Executing defined association
  Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db);
    }
  });
  
  //db.sequelize = sequelize;
  // db.Sequelize = Sequelize;
  
  export default db;
