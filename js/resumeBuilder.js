var bio = {
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
  biopic: 'https://www.gravatar.com/avatar/49ce5cf6a72cf39f485bebda03979290?s=328&d=identicon&r=PG',
  display: function () {
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
  }
};

var work = {
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
  ],
  display: function () {
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
  }
};

var education = {
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
  ],
  display: function () {
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
  }
};

var projects = {
  projects: [
    {
      title: 'Portfolio',
      dates: '2015',
      description: 'My portfolio made during Udacity front-end nanodegree program',
      url: 'https://github.com/tiurin/udfend-portfolio'
    }, {
      title: 'Arcade game',
      dates: '2015',
      description: 'A game made during Udacity front-end nanodegree program',
      url: 'https://github.com/tiurin/udfend-arcade'
    }, {
      title: 'Neighborhood map',
      dates: 2015,
      description: 'Places of interest of the neightborhood I live in',
      url: 'https://github.com/tiurin/vallvidrera-neighborhood-map'
    }
  ],
  display: function () {
    for (idx in projects.projects) {
      $('#projects').append(HTMLprojectStart);
      var projectEntry = projects.projects[idx];
      var title = HTMLprojectTitle.replace('%data%', projectEntry.title).replace('%url%', projectEntry.url);
      var dates = HTMLprojectDates.replace('%data%', projectEntry.dates);
      var description = HTMLprojectDescription.replace('%data%', projectEntry.description);
      $('.project-entry:last').append(title + dates + description);
    };
  }
};

var inName = function () {
  var parts = bio.name.split(' ');
  var firstName = parts[0].slice(0, 1).toUpperCase() + parts[0].slice(1);
  var lastName = parts[1].toUpperCase();
  return firstName + ' ' + lastName;
};


var displayMap = function () {
  $('#main').append(googleMap);
}

var initializeBlocks = function () {
  if (document.getElementsByClassName('flex-item').length === 0) {
    document.getElementById('topContacts').style.display = 'none';
  }
  if (document.getElementsByTagName('h1').length === 0) {
    document.getElementById('hea  der').style.display = 'none';
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
}

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
  initializeMap();
}

// when all resources are ready initialize all blocks
window.addEventListener('load', init);
