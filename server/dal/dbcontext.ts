// import Sequelize from 'sequelize';

// //database connection
// export var sequelize = new Sequelize({
//   database: 'cbproject',
//   username: 'root',
//   password: null,
//   dialect: 'mysql',
//   operatorsAliases: false,
//   pool: {
//     max: 50, 
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });


import {Sequelize} from 'sequelize-typescript';
 
export const sequelize =  new Sequelize({
        database: 'cbproject',
        dialect: 'mysql',
        username: 'root',
        password: null,
        storage: ':memory:',
        modelPaths: [__dirname + '/models/*']
});

