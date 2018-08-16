import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})

export class AddRouteComponent implements OnInit {

  routePhotoPath: {path: string} = {path: ""};
  
  dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
}

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }
  
  //Loading of additional files in case user select Add new gym
  addGym: boolean = false;

  addGymSection (selected): void {
    if (selected == "+ Add new gym"){
      this.addGym = true;
    } else {
      this.addGym = false;
    }
  }

  //function that check if the selected file has image extension
  fileCheck(file): void {
    if (file) {
			if (/^image\//i.test(file.type)) {
        this.readFile(file);
			} else {
				  alert('Not a valid image file!');
			}
		}
  }
  readFile(file): void {
    console.log("URL read File" + this.routePhotoPath)
    let _routePhotoPath = this.routePhotoPath;
    let _processFile = this.processFile;
    let _sanitizer = this.sanitizer;
    let _dataURItoBlob = this.dataURItoBlob;
    let reader = new FileReader();
	  reader.onloadend = function () {
      console.log("URL onloadend" + _routePhotoPath)
      console.log("Ucitano ")
     _processFile(reader.result, file.type, _routePhotoPath, _dataURItoBlob, _sanitizer);
	  }
	  reader.onerror = function () {
	  	alert('There was an error reading the file!');
	  }
    reader.readAsDataURL(file);
  }

  processFile(dataURL, fileType, routePhotoPath, dataURItoBlob, sanitizer) {
    console.log("URL Process File" + routePhotoPath)
    var maxWidth = 800;
    var maxHeight = 800;
    var image = new Image();
    image.src = dataURL;
    
    image.onload = function () {
      console.log("image width = " + image.width);
      console.log("image height = " + image.height);

      var width = image.width;
      var height = image.height;
      var shouldResize = (width > maxWidth) || (height > maxHeight);
  
      if (!shouldResize) {
        console.log("Ne trevba resize")
        ///OVO TREBVA DORADIT AKO SE SLIKA NE RESAJZUJE
        //sendFile(dataURL);
        return;
      }
  
      var newWidth;
      var newHeight;
  
      if (width > height) {
        newHeight = height * (maxWidth / width);
        newWidth = maxWidth;
      } else {
        newWidth = width * (maxHeight / height);
        newHeight = maxHeight;
      }
  
      var canvas = document.createElement('canvas');
  
      canvas.width = newWidth;
      canvas.height = newHeight;
  
      var context = canvas.getContext('2d');
  
      context.drawImage(image, 0, 0, newWidth, newHeight);
  
      dataURL = canvas.toDataURL(fileType);

      let myBlob = dataURItoBlob(dataURL);
      
      console.log("SLika dataURL je " + routePhotoPath.path)
      routePhotoPath.path = sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(myBlob));
      console.log("My url " + routePhotoPath.path)
     //sendFile(dataURL);
    };
  
    image.onerror = function () {
      alert('There was an error processing your file!');
    };
  }
 



}

