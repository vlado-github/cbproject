var sequelize = require('../dbcontext.ts');
var routeSave = require('../entities/route.ts');
var FS = require('fs');

sequelize.sync({
	force: true,
	logging: console.log

}).then(function () {
  console.log('Everything is synced');
  
	var tmpFile = '/../static/assets/tmp/test-image.png'; // Slika koja se čuva
	var gymFile = '/../static/assets/images/gym-img/target.png'; // Folder za čuvanje slike
	
	
	var imageData = FS.readFileSync(__dirname + tmpFile);

	routeSave.create({
		name: 'Route test',
		grade: '7a+',
		description: 'This route are awesome',
		gymID: 1,
		image_type: 'png',
		image_route: gymFile, // Putanja do slike
		image_data: imageData
	}).then(function (image_store) {
		try {
			FS.writeFileSync(__dirname + gymFile, image_store.name);
		} catch (e) {
			console.log(e+'');
		}
	});
});