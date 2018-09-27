import { sequelize } from '../dbcontext';
import { Route } from '../entities/route';

let myRoute = new Route().model;
// Upis i pravljenje tabele route
let upisiTest = function (obj){
  sequelize.sync()
  .then(() => myRoute.create(obj))
  .then(jane => {
    console.log(jane.toJSON());
  });
} 
upisiTest({
  name: 'Route test',
  grade: '7a+',
  description: 'This route are awesome',
  photo: 'ruta.jpg',
  gymID: 1,
  created: new Date(2018, 11, 9)
});

//   // Upis u tabelu Gyms
// let upisiTest2 = sequelize.sync()
//   .then(() => Gym.create({
//     name: 'New gym',
//     city: 'Belegrade',
//     country: 'Serbia',
//     photo: 'gym-photo.jpg',
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });

