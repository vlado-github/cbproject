import {sequelize} from '../dbcontext'
import {Route} from '../entities/route'


export let upisiTest = sequelize.sync()
  .then(() => Route.create({
    name:'Mocna ruta',
    grade:'7a+',
    description:'Prva ruta, najjaca ruta!',
    photo:'ruta.jpg',
    gymID: 1,
    created: new Date(2018, 11, 9)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

// ČITANJE IZ TABELE

// sequelize
// .query('SELECT * FROM Routes', { raw: true })
// .then(Routes => {
//   console.log(Routes)
// })
