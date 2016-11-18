var model = {
  bio: {
    name: 'Mykhailo Tiurin',
    role: 'software engineer',
    contacts: {
      mobile: 3412311234,
      email: 'mtyurin@gmail.com',
      github: 'https://github.com/tiurin',
      twitter: 'https://twitter.com/_tiurin',
      location: 'Barcelona, Spain'
    },
    welcomeMessage: 'hi there!',
    skills: ['Design', 'UX', 'Web applications', 'Javascript', 'HTML', 'CSS'],
    biopic: 'https://www.gravatar.com/avatar/49ce5cf6a72cf39f485bebda03979290?s=328&d=identicon&r=PG'
  },
  work: {
    jobs: [
      {
        employer: 'ReviewPro',
        title: 'senior software enginner',
        dates: 'October 2014 - now',
        location: 'Barcelona, Spain',
        description: 'Developing hotel online reputation management and guest intelligence solutions',
        url: 'http://www.reviewpro.com'
      }, {
        employer: 'Scytl',
        title: 'senior software enginner',
        dates: 'June 2014 - September 2014',
        location: 'Barcelona, Spain',
        description: 'Developing electronic voting solutions',
        url: 'http://www.scytl.com'
      }, {
        employer: 'Telenor DK',
        title: 'senior software enginner',
        dates: 'September 2011 - October 2013',
        location: 'Aalborg, Denmark',
        description: 'Developing middleware system for a large mobile operator',
        url: 'http://www.telenor.dk'
      }, {
        employer: 'Profitsoft',
        title: 'software enginner',
        dates: 'March 2009 - September 2011',
        location: 'Kharkiv, Ukraine',
        description: 'Developing web-based solutions for insurance business automation',
        url: 'http://www.profitsoft.ua/en/'
      }
    ]
  },
  education: {
    schools: [
      {
        name: 'Kharkiv Polytechnical Institute',
        degree: 'Master degree',
        major: 'Metrology and Measuring Technology',
        location: 'Kharkiv, Ukraine',
        dates: '2002-2008',
        url: 'http://www.kpi.kharkov.ua/en/'
      }
    ],
    onlineCourses: [
      {
        title: 'M101J: MongoDB for Java Developers',
        school: 'MongoDB',
        dates: 'May 2014',
        url: 'http://education.mongodb.com/downloads/certificates/8a8b88ac78db482d9d64e23619280ed1/Certificate.pdf'
      }, {
        title: 'Algorithms: Design and Analysis, Part 1',
        school: 'Stanford University / Coursera',
        dates: 'September 2013',
        url: 'https://www.coursera.org/course/algo'
      }
    ]
  },
  projects: {
    projects: [
      {
        title: 'Portfolio',
        dates: '2015',
        description: 'My portfolio made during Udacity front-end nanodegree program',
        url: 'https://github.com/tiurin/udfend-portfolio',
        images: ['images/portfolio_300.png']
      }, {
        title: 'Arcade game',
        dates: '2015',
        description: 'A game made during Udacity front-end nanodegree program',
        url: 'https://github.com/tiurin/udfend-arcade',
        images: ['images/platformer_300.png']
      }, {
        title: 'Neighborhood map',
        dates: 2015,
        description: 'Places of interest of the neightborhood I live in',
        url: 'https://github.com/tiurin/vallvidrera-neighborhood-map',
        images: ['images/map_300.png']
      }
    ]
  },
  locations: [], // an array of every location string from the JSONs written for bio, education, and work.
  init: function () {
    // adds the single location property from bio to the locations array
    this.locations.push(this.bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in this.education.schools) {
      this.locations.push(this.education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in this.work.jobs) {
      this.locations.push(this.work.jobs[job].location);
    }
  }

};

var octopus = {
  getBio: function () {
    return model.bio;
  },
  getWork: function () {
    return model.work;
  },
  getEducation: function () {
    return model.education;
  },
  getProjects: function () {
    return model.projects;
  },
  getLocations: function () {
    return model.locations;
  },
  init: function () {
    model.init();
    view.init();
  }
}

var inName = function () {
  var parts = bio.name.split(' ');
  var firstName = parts[0].slice(0, 1).toUpperCase() + parts[0].slice(1);
  var lastName = parts[1].toUpperCase();
  return firstName + ' ' + lastName;
};

// initialization - renders blocks one by one by calling corresponding functions

var init = function () {
  bio.display();
  work.display();
  projects.display();
  education.display();
  displayMap();
  // hide blocks without info
  initializeBlocks();
  //show map

}

var view = {
  renderBio: function () {
    var bio = octopus.getBio();
    $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
    $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

    $.each(bio.contacts, function (key, value) {
      var contactList = HTMLcontactGeneric.replace('%contact%', key).replace('%data%', value);
      $('#topContacts').append(contactList);
      $('#footerContacts').append(contactList);
    });

    $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));


    $('#header').append(HTMLskillsStart);
    for (idx in bio.skills) {
      $('#skills').append(HTMLskills.replace('%data%', bio.skills[idx]));
    }
  },
  renderWork: function () {
    var work = octopus.getWork();
    for (idx in work.jobs) {
      $('#workExperience').append(HTMLworkStart);
      var workEntry = work.jobs[idx];
      var employer = HTMLworkEmployer.replace('%data%', workEntry.employer).replace('%url%', workEntry.url);
      var title = HTMLworkTitle.replace('%data%', workEntry.title);
      var dates = HTMLworkDates.replace('%data%', workEntry.dates);
      var locationString = HTMLworkLocation.replace('%data%', workEntry.location);
      var description = HTMLworkDescription.replace('%data%', workEntry.description);
      $('.work-entry:last').append(employer + title + dates + locationString + description);
    }
  },
  renderEducation: function () {
    var education = octopus.getEducation();
    for (idx in education.schools) {
      var educationEntry = education.schools[idx];
      $('#education').append(HTMLschoolStart);
      var name = HTMLschoolName.replace('%data%', educationEntry.name).replace('%url%', educationEntry.url);
      var degree = HTMLschoolDegree.replace('%data%', educationEntry.degree);
      var dates = HTMLschoolDates.replace('%data%', educationEntry.dates);
      var location = HTMLschoolLocation.replace('%data%', educationEntry.location);
      var major = HTMLschoolMajor.replace('%data%', educationEntry.major);
      $('.education-entry:last').append(name + degree + dates + location + major);
    };
    $('#education').append(HTMLonlineClasses);
    for (idx in education.onlineCourses) {
      $('#education').append(HTMLonlineStart);
      var course = education.onlineCourses[idx];
      var title = HTMLonlineTitle.replace('%data%', course.title).replace('%url%', course.url);
      var school = HTMLonlineSchool.replace('%data%', course.school)
      var dates = HTMLonlineDates.replace('%data%', course.dates);
      $('.online-classes-entry:last').append(title + school + dates);
    };
  },
  renderProjects: function () {
    var projects = octopus.getProjects();
    for (idx in projects.projects) {
      $('#projects').append(HTMLprojectStart);
      var projectEntry = projects.projects[idx];
      var title = HTMLprojectTitle.replace('%data%', projectEntry.title).replace('%url%', projectEntry.url);
      var dates = HTMLprojectDates.replace('%data%', projectEntry.dates);
      var description = HTMLprojectDescription.replace('%data%', projectEntry.description);
      var image = '';
      $.each(projectEntry.images, function (index, value) {
        image += HTMLprojectImage.replace('%data%', value);
      });
      $('.project-entry:last').append(title + dates + description + image);
    };
  },
  initializeBlocks: function () {
    if (document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('topContacts').style.display = 'none';
    }
    if (document.getElementsByTagName('h1').length === 0) {
      document.getElementById('header').style.display = 'none';
    }
    if (document.getElementsByClassName('work-entry').length === 0) {
      document.getElementById('workExperience').style.display = 'none';
    }
    if (document.getElementsByClassName('project-entry').length === 0) {
      document.getElementById('projects').style.display = 'none';
    }
    if (document.getElementsByClassName('education-entry').length === 0) {
      document.getElementById('education').style.display = 'none';
    }
    if (document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('lets-connect').style.display = 'none';
    }
    if (document.getElementById('map') === null) {
      document.getElementById('map-div').style.display = 'none';
    }
  },
  map: null,
  initMap : function () {
    $('#main').append(googleMap);
    var mapOptions = {
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(document.querySelector('#map-div'), mapOptions);
    window.mapBounds = new google.maps.LatLngBounds();
    var that = this;
    window.addEventListener('resize', function (e) {
      //Make sure the map bounds get updated on page resize
      that.map.fitBounds(mapBounds);
    });
  },
  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  createMapMarker: function (placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat(); // latitude from the place service
    var lon = placeData.geometry.location.lng(); // longitude from the place service
    var name = placeData.formatted_address; // name of the place from the place service
    var bounds = window.mapBounds; // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: this.map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function () {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    this.map.fitBounds(bounds);
    // center the map
    this.map.setCenter(bounds.getCenter());
  },
  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  pinPoster: function () {
    var locations = octopus.getLocations();

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      var that = this;
      service.textSearch(request, function (results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          that.createMapMarker(results[0]);
        }
      });
    }
  },
  init: function () {
    this.renderBio();
    this.renderWork();
    this.renderEducation();
    this.renderProjects();
    this.initMap();
    this.initializeBlocks();
    this.pinPoster();
  }

}

// when all resources are ready initialize all blocks
$(octopus.init);
