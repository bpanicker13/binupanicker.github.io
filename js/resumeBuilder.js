(function($) {
	
	// Bio JSON object
	var bio = {
		"name" : "Binu Panicker",
		"role" : "Front-end Web Developer",
		"contacts" : {
			"mobile" : "832-766-6969",
			"email" : "bpanicker13@gmail.com",
			"github" : "http://bpanicker13.github.io",
			"twitter" : "https://twitter.com/bpanicker13",
			"linkedin" : "https://www.linkedin.com/in/binupanicker",
			"location" : "Houston, Texas, US"
		},
		"welcomeMessage": "<p>Hello! My name is Binu Panicker. I have my roots in art, web development and security, I feel I can bring a unique perspective to software development. I am intent on expanding my craft, solving challenging problems and staying on the leading edge.<\/p><p>Please feel free to look over my resume and contact me with potential job openings if you like what you see. Thanks for stopping by!<\/p>",
		"skills": ["HTML5", "CSS3", "JavaScript", "Responsive design"],
		"biopic": "images/binu.png",
		"display" : function() {
			// Display name, role, picture and welcome message
			$('#bio-name').append(HTMLheaderName.replace('%data%', bio.name));
			$('#bio-name').append(HTMLheaderRole.replace('%data%', bio.role));
			$('#bio-details').append(HTMLbioPic.replace('%data%', bio.biopic));
			$('#bio-details').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

			// Display contact information on both the top and bottom of the page
			var bioMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
			var bioEmail = HTMLemail.replace('%data%', bio.contacts.email);
			var bioGithub = HTMLgithub.replace('%data%', makeLink(bio.contacts.github));
			var bioLinkedIn = HTMLlinkedIn.replace('%data%', makeLink(bio.contacts.linkedin));
			var bioLocation = HTMLlocation.replace('%data%', bio.contacts.location);
			var formattedContacts = bioMobile + bioEmail + bioGithub + bioLinkedIn + bioLocation;
			$('#topContacts, #footerContacts').append(formattedContacts);

			// Check if the skills array is empty or not and if not, output the skills
			if (bio.skills.length > 0) {
				$('#skillset').append(HTMLskillsStart);
				for(skill in bio.skills) {
					$('#skills').append(HTMLskills.replace('%data%', bio.skills[skill]));
				}
			}
		}
	};

	// Education JSON object
	var education = {
		"schools": [
			{
				"name" : "Houston Baptist University",
				"location" : "Houston, TX",
				"degree" : "Bachelor's of Science",
				"majors" : "Business Administration",
				"dates" : 2004,
				"url" : "www.hbu.edu"
			}
		],
		"onlineCourses" : [
			{
				"title": "Front-end Web Development Nanodegree",
				"school": "Udacity",
				"date": 2015,
				"url" : "https://www.udacity.com/course/nd001"
			}
		],
		"display" : function() {
			$('#education').append(HTMLschoolStart);
			for (school in education.schools) {
				var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
				var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
				$('.education-entry:last').append(formattedName + formattedDegree);
				$('.education-entry:last').append(HTMLschoolDates.replace('%data%', education.schools[school].dates));
				$('.education-entry:last').append(HTMLschoolLocation.replace('%data%', education.schools[school].location));

				// Loop through the majors array
				if (education.schools[school].majors.length > 0) {
					for (major in education.schools[school].majors) {
						if (education.schools[school].majors[major] > 0) {
							$('.education-entry:last').append(HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]));
						}
					}
				}
			}

			// Display any online courses
			for (course in education.onlineCourses) {
				$('.education-entry:last').append(HTMLonlineClasses);
				var onlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title );
				
				// Added URL into the title link rather than as a separate link
				onlineTitle = onlineTitle.replace('%url%', education.onlineCourses[course].url);
				var onlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
				$('.education-entry:last').append(onlineTitle + onlineSchool);

				$('.education-entry:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[course].date));
			}
		}
	};

	// Work JSON object
	var work = {
		"jobs": [
			{
				"employer": "Discount Grocers",
				"title": "DBA/Network Security",
				"location": "Stafford, TX",
				"dates": "2010 - 2014",
				"description": "<ul><li>Managed SQL Server 2008 R2 database, development, design, maintenance and production support of retail and wholesale databases, business applications, new server setup, MySQL Server installation, upgrade, migration.<\/li><li>Performed security and logged reviews for systems.</li><li>Provide assistance with security audits, risk assessments. Provide technical input into recommendations for enhancing data systems security. Utilize security systems to resolve security related issues and ensure effective and appropriate security measures are in place.<\/li><\/ul><h4>Technologies used:<\/h4><p class='orange-text bold'>MSSQL Server, IDS, SNORT, SIEM<\/p>"
			},
			{
				"employer" : "Advanced Innovative Stone",
				"title" : "Network Engineer",
				"location" : "Missouri City, TX",
				"dates" : "September 2013 - December 2014",
				"description" : "<ul><li>Maintain and administer computer networks and related computing environments including computer hardware, systems software, applications software, and all configurations.<\/li><li>Designed, Install, and support the local area network (LAN), wide area network (WAN), and Internet systems.<\/li><li>Monitor network to ensure network availability to all system users and performed maintenance to support network.<\/li><li>Monitor and test Website performance to ensure Websites operate correctly and without interruption<\/li><\/ul>"
			},
			{
				"employer" : "BPIC Enterprises, LLC",
				"title" : "Operations Manager",
				"location" : "Stafford, TX",
				"dates" : "August, 2006 - January, 2011",
				"description" : "<ul><li>Oversee activities directly related to making products or providing services.<\/li><li>Direct and coordinate activities of businesses or departments concerned with the production, pricing, sales, or distribution of products.<\/li><li>Review financial statements, sales and activity reports, and other performance data to measure productivity and goal achievement and to determine areas needing cost reduction and program improvement.<\/li><li>Manage staff of 25, preparing work schedules and assigning specific duties<\/li><\/ul>"
			}
		],
		"display" : function() {
			// Loop through each job in the jobs object and display the output
			for (job in work.jobs) {
				$('#workExperience').append(HTMLworkStart);

				var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
				var formatedEmployerTitle = formattedEmployer + formattedTitle;

				$('.work-entry:last').append(formatedEmployerTitle);
				$('.work-entry:last').append(HTMLworkDateLocStart);
				$('.work-entry:last .date-location').append(HTMLworkDates.replace('%data%', work.jobs[job].dates));
				$('.work-entry:last .date-location').append(HTMLworkLocation.replace('%data%', work.jobs[job].location));
				$('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[job].description));
			}
		}
	};

	// Projects JSON object - added URL and Technologies properties not in specification
	var projects = {
		"project" : [
			{
				"title": "Feed-Reader Testing",
				"dates": "2015",
				"description": "Wrote comprehensive unit tests, for an RSS Feed Reader application that uses Google's RSS API.",
				"images": ["images/test.png"],
				"details" : {
					"url": "https://github.com/bpanicker13/bpanicker13.github.io/blob/master/feed-reader/index.html",
					"image" : "images/test.png",
					"description" : "<p>Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.<\/p>",
					"technologies": ["Javascript Testing Frameworks", "Jasmine", "Javascript"]
				}
			},
			{
				"title": "Adventures of Einstien the Dog",
				"dates": "2015",
				"description": "A JavaScript/HTML5 Canvas Game based on the classic Frogger arcade game.",
				"images": ["images/game.png"],
				"details" : {
					"url": "http://bpanicker13.github.io/game/",
					"image" : "images/game.png",
					"description" : "<p>This project is a take on the classic Frogger arcade game and uses Javascript and the HTML5 Canvas. It started out as a very simplistic design with basic graphics and features but I soon added to it and redesigned the complete look of the game, adding obstacles and collectibles.<\/p><p>This was a fun project to work on as well as play!<\/p>",
					"technologies": ["Javascript OOP", "CSS3", "HTML5 Canvas"]
				}
			},
			{
				"title": "Neighborhood #HotSpots",
				"dates": "2015",
				"description": "Developed a full-page map that loads with 20 trending #HotSpots near me.",
				"images": ["images/neighborhood.png"],
				"details" : {
					"url": "https://github.com/bpanicker13/bpanicker13.github.io/blob/master/hotspots/src/index.html",
					"image" : "images/neighborhood.png",
					"description" : "<p>A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the Four Square and Wikipedia APIs. Used Gulp and Bower to package the application.<\/p>",
					"technologies": ["Javascript", "HTML5", "CSS3", "Knockout.js"]
				}
			},
			{
				"title": "Website Optimization",
				"dates": "2015",
				"description": "Optimized an inefficient web application's JavaScript.",
				"images": ["images/optimize.png"],
				"details" : {
					"url": "https://github.com/bpanicker13/bpanicker13.github.io/blob/master/optimizer/index.html",
					"image" : "images/optimize.png",
					"description" : "<p>Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90<\/p>",
					"technologies": ["HTML5", "CSS3", "jQuery", "Bootstrap"]
				}
			},
			{
				"title": "Interactive Resume",
				"dates": "2015",
				"description": "My Resume your lookin at!",
				"images": ["images/resume.png"],
				"details" : {
					"url": "http://bpanicker13.github.io",
					"image" : "images/resume.png",
					"description" : "<p>Using jQuery, developed an interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information. Further customized the project by personalizing the design using CSS.Using jQuery, developed an interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information. Further customized the project by personalizing the design using CSS.<\/p>",
					"technologies": ["HTML5", "CSS3", "jQuery", "Photoshop"]
				}
			}
		],
		"display" : function() {
			for (var project in projects.project) {
				$('#projects .inner').append(HTMLprojectStart.replace('%id%', project));

				var projectTitle = HTMLprojectTitle.replace('%data%', projects.project[project].title);
				projectTitle = projectTitle.replace('%id%', project);
				$('.project-entry:last').append(projectTitle);

				var projectDate = HTMLprojectDates.replace('%data%', projects.project[project].dates);
				//$('.project-entry:last').append(projectDate);

				var projectDesc = HTMLprojectDescription.replace('%data%', projects.project[project].description);
				$('.project-entry:last').append(projectDesc);

				$('.project-entry:last').append(HTMLprojectImagesStart);
				
				// Loop through array of images
				if (projects.project[project].images.length > 0) {
					for (image in projects.project[project].images) {
						var image = HTMLprojectImage.replace('%data%', projects.project[project].images[image]);
						image = image.replace('%id%', project);
						$('.project-entry:last .fadein:last').append(image);
					}
				}

				$('.project-entry:last').append(HTMLprojectTechStart);
				// Loop through and create a list of the technologies used on this project
				if (projects.project[project].details.technologies.length > 0) {
					for (technology in projects.project[project].details.technologies) {
						$('.tech-list:last').append(HTMLprojectTech.replace('%data%', projects.project[project].details.technologies[technology]));
					}
				}

				// Create 2 buttons, one to view details of the project and one to launch the live project
				var projectView = HTMLprojectView.replace('%data%', project);
				$('.project-entry:last').append(projectView);

				// Only display the "Launch Site" button if there is a live site to view
				if (projects.project[project].details.url.length > 0) {
					var projectURL = HTMLprojectURL.replace('%data%', projects.project[project].details.url);
					projectURL = projectURL.replace('%title%', projects.project[project].title)
					$('.project-entry:last').append(projectURL);
				}

				// Build the project details section. This section is hidden on the page with CSS and
				// is displayed within a lightbox when the project title, image or view details button
				// are clicked
				$('#project-details').append(HTMLprojectDetailStart.replace('%id', 'detail-' + project));
				
				// Get the image that will be displayed on the details page
				var detailImage = HTMLprojectDetailImage.replace('%data%', projects.project[project].details.image);
				detailImage = detailImage.replace('%name%', projects.project[project].title);
				$('.project-detail .inner:last').append(detailImage);

				// Get the detailed project description
				var detailDesc = HTMLprojectDetailDesc.replace('%name%', projects.project[project].title);
				detailDesc = detailDesc.replace('%data%', projects.project[project].details.description);
				$('.project-detail .inner:last').append(detailDesc);

				// Get the URL of the live project if one exists
				if (projects.project[project].details.url.length > 0) {
					projectURL = HTMLprojectDetailURL.replace(/%data%/g, projects.project[project].details.url);
					$('.project-url:last').append(projectURL);
				}

				// Loop through and create a list of the technologies used on this project
				if (projects.project[project].details.technologies.length > 0) {
					for (technology in projects.project[project].details.technologies) {
						$('.project-tech:last').append(HTMLprojectDetailTech.replace('%data%', projects.project[project].details.technologies[technology]));
					}
				}
			}
		}
	};

	// Simple function to append Google Map to map div
	function displayMap() {
		$('#mapDiv .row:first').append(googleMap);
	}

	// makeLink - Used to take a web address and convert it into a clickable link
	// with optional display text
	function makeLink(address, text, strip_protocol, new_window) {
		
		if (!address) {
			return;
		}

		var regex_prot = /^(.*?):\/\/(www.)?/,
				link = '';
		
		if(text && strip_protocol === true) {
			text = text.replace(regex_prot, '');
		}
		else {
			text = address.replace(regex_prot, '');
		}
		
		// Build the link. If no text was specified, then use the address as the link text
		link = '<a href="' + address + ((new_window === true) ? '" target="_blank">' : '">') + 
						((text !== undefined) ? text : address) + '</a>';
		
		return link;
	}

	/*
	This is the fun part. Here's where we generate the custom Google Map for the website.
	See the documentation below for more details.
	https://developers.google.com/maps/documentation/javascript/reference
	*/
	var map;    // declares a global map variable


	/*
	Start here! initializeMap() is called when page is loaded.
	*/
	function initializeMap() {

	  var locations;

	  var mapOptions = {
	    disableDefaultUI: true
	  };

	  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
	  // <div id="map">, which is appended as part of an exercise late in the course.
	  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


	  /*
	  locationFinder() returns an array of every location string from the JSONs
	  written for bio, education, and work.
	  */
	  function locationFinder() {

	    // initializes an empty array
	    var locations = [];

	    // adds the single location property from bio to the locations array
	    locations.push(bio.contacts.location);

	    // iterates through school locations and appends each location to
	    // the locations array
	    for (var school in education.schools) {
	      locations.push(education.schools[school].location);
	    }

	    // iterates through work locations and appends each location to
	    // the locations array
	    for (var job in work.jobs) {
	      locations.push(work.jobs[job].location);
	    }

	    return locations;
	  }

	  /*
	  createMapMarker(placeData) reads Google Places search results to create map pins.
	  placeData is the object returned from search results containing information
	  about a single location.
	  */
	  function createMapMarker(placeData) {

	    // The next lines save location data from the search result object to local variables
	    var lat = placeData.geometry.location.lat();  // latitude from the place service
	    var lon = placeData.geometry.location.lng();  // longitude from the place service
	    var name = placeData.formatted_address;   // name of the place from the place service
	    var bounds = window.mapBounds;            // current boundaries of the map window

	    // marker is an object with additional data about the pin for a single location
	    var marker = new google.maps.Marker({
	      map: map,
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
	    google.maps.event.addListener(marker, 'click', function() {
	      infoWindow.open(map,marker);
	    });

	    // this is where the pin actually gets added to the map.
	    // bounds.extend() takes in a map location object
	    bounds.extend(new google.maps.LatLng(lat, lon));
	    // fit the map to the new marker
	    map.fitBounds(bounds);
	    // center the map
	    map.setCenter(bounds.getCenter());
	  }

	  /*
	  callback(results, status) makes sure the search returned results for a location.
	  If so, it creates a new map marker for that location.
	  */
	  function callback(results, status) {
	    if (status == google.maps.places.PlacesServiceStatus.OK) {
	      createMapMarker(results[0]);
	    }
	  }

	  /*
	  pinPoster(locations) takes in the array of locations created by locationFinder()
	  and fires off Google place searches for each location
	  */
	  function pinPoster(locations) {

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
	      service.textSearch(request, callback);
	    }
	  }

	  // Sets the boundaries of the map based on pin locations
	  window.mapBounds = new google.maps.LatLngBounds();

	  // locations is an array of location strings returned from locationFinder()
	  locations = locationFinder();

	  // pinPoster(locations) creates pins on the map for each location in
	  // the locations array
	  pinPoster(locations);

	}


	/*
	Uncomment the code below when you're ready to implement a Google Map!
	*/

	// Calls the initializeMap() function when the page loads
	window.addEventListener('load', initializeMap);

	// Vanilla JS way to listen for resizing of the window
	// and adjust map bounds
	window.addEventListener('resize', function(e) {
	  
	  //Make sure the map bounds get updated on page resize
	  map.fitBounds(mapBounds);
	});

	// Call functions to display the various resume sections
	bio.display();
	work.display();
	projects.display();
	education.display();
	displayMap();


})(jQuery);

