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
  skills: ['javascript', 'microservices', 'design', 'ux'],
  biopic: 'https://www.gravatar.com/avatar/49ce5cf6a72cf39f485bebda03979290?s=328&d=identicon&r=PG'
};

var work = {
  jobs: [{
    employer: 'ReviewPro',
    title: 'senior software enginner',
    dates: '2014-2015',
    location: 'Barcelona, Spain'
  }, {
    employer: 'Scytl',
    title: 'senior software enginner',
    dates: '2014-2014',
    location: 'Barcelona, Spain'
  }],
  display: function() {
    for (idx in work.jobs) {
      $('#workExperience').append(HTMLworkStart);
      var workEntry = work.jobs[idx];
      var employer = HTMLworkEmployer.replace('%data%', workEntry.employer);
      var title = HTMLworkTitle.replace('%data%', workEntry.title);
      var dates = HTMLworkDates.replace('%data%', workEntry.dates);
      var locationString = HTMLworkLocation.replace('%data%', workEntry.location);
      $('.work-entry:last').append(employer + title + dates + locationString);

    }
  }

};

var education = {
  schools: [{
    name: 'Kharkiv Polytechnical Institute',
    degree: 'Master degree',
    major: 'Metrology and Measuring Technology',
    location: 'Kharkiv, Ukraine',
    dates: '2002-2008',
    url: 'http://www.kpi.kharkov.ua/en/'
  }],
  onlineCourses: [{
    title: 'M101J: MongoDB for Java Developers',
    school: 'MongoDB',
    dates: 'May 2014',
    url: 'http://education.mongodb.com/downloads/certificates/8a8b88ac78db482d9d64e23619280ed1/Certificate.pdf'
  }],
  display: function() {
    for (idx in education.schools) {
      var educationEntry = education.schools[idx];
      $('#education').append(HTMLschoolStart);
      var name = HTMLschoolName.replace('%data%', educationEntry.name);
      var dates = HTMLschoolDates.replace('%data%', educationEntry.dates);
      var degree = HTMLprojectDescription.replace('%data%', educationEntry.degree);
      $('.education-entry:last').append(name + degree + dates);
    };
    for (idx in education.onlineCourses) {
      $('#education').append(HTMLonlineClasses);
      $('#education').append(HTMLonlineStart);
      var course = education.onlineCourses[idx];
      var title = HTMLonlineTitle.replace('%data%', course.title);
      var school = HTMLonlineSchool.replace('%data%', course.school)
      var dates = HTMLonlineDates.replace('%data%', course.dates);
      $('.online-classes-entry:last').append(title + school + dates);
    };
  }
};

var projects = {
  projects: [{
    title: 'P1',
    dates: '2013-2014',
    description: 'eeey'
  }, {
    title: 'P2',
    dates: '2014-2015',
    description: 'doo bee doo boo doo'
  }],
  display: function() {
    for (idx in projects) {
      $('#projects').append(HTMLprojectStart);
      var title = HTMLprojectTitle.replace('%data%', projects[idx].title);
      var dates = HTMLprojectDates.replace('%data%', projects[idx].dates);
      var description = HTMLprojectDescription.replace('%data%', projects[idx].description);
      $('.project-entry:last').append(title + dates + description);

    };
  }
};

var inName = function() {
  var parts = bio.name.split(' ');
  var firstName = parts[0].slice(0, 1).toUpperCase() + parts[0].slice(1);
  var lastName = parts[1].toUpperCase();
  return firstName + ' ' + lastName;
};

$('#main').prepend(HTMLheaderRole.replace('%data%', bio.role));
$('#main').prepend(HTMLheaderName.replace('%data%', bio.name));



if (bio.skills) {
  $('#header').append(HTMLskillsStart);
  $('#skills').append(HTMLskills.replace('%data%', skills));
};

$(document).click(function(loc) {
  console.log(loc.pageX, loc.pageY);

});

// $('#main').append(internationalizeButton);




work.display();
projects.display();
education.display();

$('#main').append(googleMap);
initializeMap();
