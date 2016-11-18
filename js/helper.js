/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
// $(document).ready(function () {
//   $('button').click(function () {
//     var iName = inName() || function () {};
//     $('#name').html(iName);
//   });
// });

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
// clickLocations = [];
//
// function logClicks(x, y) {
//   clickLocations.push({
//     x: x,
//     y: y
//   });
//   console.log('x location: ' + x + '; y location: ' + y);
// }
//
// $(document).click(function (loc) {
//   logClicks(loc.pageX, loc.pageY);
// });



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/


  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */




  // Sets the boundaries of the map based on pin locations


  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
