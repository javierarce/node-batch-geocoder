sys = require('util');
fs  = require('fs');
geo = require("batch-geocoder");
_   = require("underscore");

geocoder = new geo("./cache/cache.csv");

var array = fs.readFileSync('./locations.txt').toString().split('\n');

var onGeocoderFinish = function(collection) {

  var csv = "location,latitude,longitude";

  for (var i = 0; i < array.length; i++) {

    var name  = array[i];
    var place = collection[name];

    if (name && place) {
      csv += '\n"' + name + '",' + place.lat + ',' + place.lng;
    }

  }

  fs.writeFile("./locations.csv", csv, function(err) {

    if (err) {
      console.log(err);
    } else {
      console.log("The file was saved!\r");
    }

  });

};

geocoder.on("status", function(status){
  process.stdout.write("Geocoding. " + (status.total - status.current) + " places left.\r");
});

geocoder.on("error", function(status){
  console.log("Something went wrong", status);
});

geocoder.on("finish", function(collection){
  onGeocoderFinish(collection);
});

geocoder.find(array);
