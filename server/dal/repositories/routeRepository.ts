//t
var sequelize = require('../dbcontext.ts');
var Route = require('../entities/route.ts');
var Gym = require('../entities/gym.ts');


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

