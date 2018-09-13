//t
var sequelize = require('../dbcontext');
var Route = require('../entities/route');
var Gym = require('../entities/gym');


// Upis i pravljenje tabele route
let upisiTest = sequelize.sync()
  .then(() => Route.create({
    name: 'Route test',
    grade: '7a+',
    description: 'This route are awesome',
    photo: 'ruta.jpg',
    gymID: 1,
    created: new Date(2018, 11, 9)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });


//t
let upisiTest2 = sequelize.sync()
  .then(() => Gym.create({
    name: 'New gym',
    city: 'Belegrade',
    country: 'Serbia',
    photo: 'gym-photo.jpg',
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });


//  module.exports = {
//    test() { console.log("TEST USPJESAN!") }
//  };



// ČITANJE IZ TABELE

// sequelize
// .query('SELECT * FROM Routes', { raw: true })
// .then(Routes => {
//   console.log(Routes)
// })
