import Route  from './dal/models/route';
import Gym  from './dal/models/gym';
import { RouteRepository } from './dal/repositories/routeRepository'
import { GymRepository } from './dal/repositories/gymRepository'


let routeRepo = new RouteRepository();
let gymRepo = new GymRepository();

var express = require('express');
var router = express.Router();


var multer = require('multer');
var ejs = require('ejs');
var path = require('path');

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

// Init Upload
const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
  }).single('routePhoto');

// Check File Type
function checkFileType(file, cb){
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
  
    if(mimetype && extname){
      return cb(null,true);
    } else {
      cb('Error: Images Only!');
    }
  }


// /// ovaj dio treba srediti

// // Init app
// const app = express();

// // EJS
// app.set('view engine', 'ejs');

// // Public Folder
// app.use(express.static('./public'));

// app.get('/', (req, res) => res.render('index'));

// app.post('/upload', (req, res) => {
//   upload(req, res, (err) => {
//     if(err){
//       res.render('index', {
//         msg: err
//       });
//     } else {
//       if(req.file == undefined){
//         res.render('index', {
//           msg: 'Error: No File Selected!'
//         });
//       } else {
//         res.render('index', {
//           msg: 'File Uploaded!',
//           file: `uploads/${req.file.filename}`
//         });
//       }
//     }
//   });
// });





// API root
router.get('/', function (req, res, next) {
    res.send("API root");
});

// Return a list of gyms that are displeyed in dropdown menu at Add Route page
router.get('/getGymsList', function (req, res, next) {
    gymRepo.getGymList().then((obj)=>res.send(JSON.stringify(obj)));
    
});

// Returns array of all gyms, TODO: Pagination
router.get('/getGyms', function (req, res, next) {
    gymRepo.findAll().then((gyms)=>res.send(JSON.stringify(gyms)));
});

// Returns array of all gyms, TODO: Pagination
router.get('/getRoutes/:id', function (req, res, next) {
    routeRepo.findByQueryParam(req.params.id).then((routes)=>res.send(JSON.stringify(routes)));
});

// Returns data for a single gym
router.get('/getGym/:id', function (req, res, next) {
    gymRepo.findById(req.params.id).then((gym)=>
    res.send(gym.dataValues))
});

// Adds Route to the DB
router.post('/addRoute', function (req, res) {
    // If add new gym is selected, saves new gym and than adds route
    if(req.body.gymId=="null"){
        let gym = new Gym(req.body.gym)
        gymRepo.create(gym).then((gym)=> {
            req.body.gymId=gym.dataValues.id;
            let route = new Route (req.body)
            routeRepo.create(route).then((myroute)=>res.status(200).json(myroute.dataValues.gymId))
        })
    // if exiwting gym is selected, adds new route
    } else {
        debugger;
        let route = new Route (req.body)
        routeRepo.create(route).then((myroute)=>res.status(200).json(myroute.dataValues.gymId))
    } 
});

module.exports = router;


