/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><div><span class="orange-text">%contact%</span><span class="white-text">%data%</span></div></li>';
var HTMLmobile = '<li class="flex-item"><div><span class="orange-text">mobile</span><span class="white-text">%data%</span></div></li>';
var HTMLemail = '<li class="flex-item"><div><span class="orange-text">email</span><span class="white-text">%data%</span></div></li>';
var HTMLtwitter = '<li class="flex-item"><div><span class="orange-text">twitter</span><span class="white-text">%data%</span></div></li>';
var HTMLgithub = '<li class="flex-item"><div><span class="orange-text">github</span><span class="white-text">%data%</span></div></li>';
var HTMLlinkedIn = '<li class="flex-item"><div><span class="orange-text">linkedin</span><span class="white-text">%data%</span></div></li>';
var HTMLblog = '<li class="flex-item"><div><span class="orange-text">blog</span><span class="white-text">%data%</span></div></li>';
var HTMLlocation = '<li class="flex-item"><div><span class="orange-text">location</span><span class="white-text">%data%</span></div></li>';

var HTMLbioPic = '<div class="col-sm-3 col-lg-2"><div class="biopic"><img src="%data%"></div></div>';
var HTMLwelcomeMsg = '<div class="col-sm-9 col-lg-10"><span class="welcome-message">%data%</span></div>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="orange-text">%data%</span></li>';

var HTMLworkStart = '<div class="row"><div class="work-entry col-md-12"></div></div>';
var HTMLworkEmployer = '<h3 class="employer">%data%';
var HTMLworkTitle = ' - %data%</h3>';
var HTMLworkDateLocStart = '<div class="date-location clearfix"></div>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '%data%';

var HTMLprojectStart = '<div id="project-%id%" class="project-entry col-md-4 col-sm-6 clearfix"></div>';
var HTMLprojectTitle = '<a class="project-title" href="#" data-featherlight="#detail-%id%">%data%</a>'; //<a href="#">%data%</a>
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p class="project-description">%data%</p>';
var HTMLprojectImagesStart = '<div class="fadein"></div>';
var HTMLprojectImage = '<a href="#" data-featherlight="#detail-%id%"><img src="%data%"></a>'; //<img src="%data%">';
var HTMLprojectURL = '<a class="url-btn btn btn-primary" href="%data%" target="_blank" data-toggle="tooltip" data-placement="top" title="Launch %title%">Launch Site</a>';
var HTMLprojectView = '<a class="details-btn btn btn-primary" href="#" data-featherlight="#detail-%data%" data-toggle="tooltip" data-placement="top" title="View project details">View Details</a>';
var HTMLprojectTechStart = '<div class="tech-list"></div>';
var HTMLprojectTech = '<span class="label label-info">%data%</span>';//'<li class="orange-text">%data%</li>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="%url%" target="_blank">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div class="col-md-12"><div id="map"></div></div>';

// Added new Project Detail template
var HTMLprojectDetailStart = '<div id="%id" class="project-detail"><div class="inner"></div></div>';
var HTMLprojectDetailURL = '<a href="%data%" target="_blank">%data%</a>';
var HTMLprojectDetailImage = '<div class="project-image"><img src="%data%" alt="%name%"></div>';
var HTMLprojectDetailDesc = '<div class="project-desc flex-item"><h2>%name%</h2><div class="project-url"></div><p>%data%</p><h4>Technologies used:</h4><ul class="project-tech"></ul></div>';
var HTMLprojectDetailTech = '<li class="orange-text">%data%</li>';

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button.intButton').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });

  // Code to change the opacity of all project images except the currently hovered one
  $(".project-entry").delegate("img", "mouseover mouseout", function(e) {
    if (e.type == 'mouseover') {
      jQuery(".project-entry img").not(this).dequeue().animate({opacity: "0.3"}, 300);
    } else {
      jQuery(".project-entry img").not(this).dequeue().animate({opacity: "1"}, 300);
    }
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

// Function to initialize Bootstrap tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})




