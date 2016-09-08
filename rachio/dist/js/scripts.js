
/* REQUESTING AJAX DATA FROM THE RACHIO API */

'use strict'

// Initialize zone data here

;
const WATERING_DURATION = 10;
const STATUS_INACTIVE = 'Watering Status: Inactive';
const TURNING_ON_WATER = 'Waiting on the sprinkler';
const STATUS_ACTIVE = 'Watering Status: Active';

// Create individual timer variables before contacting the API

let timerOneData = document.getElementById('timer-one');
timerOneData.innerHTML = '';
let timerTwoData = document.getElementById('timer-two');
timerTwoData.innerHTML = '';
let timerThreeData = document.getElementById('timer-three');
timerThreeData.innerHTML = '';
let timerFourData = document.getElementById('timer-four');
timerFourData.innerHTML = '';
let timerFiveData = document.getElementById('timer-five');
timerFiveData.innerHTML = '';
let timerSixData = document.getElementById('timer-six');
timerSixData.innerHTML = '';
let timerSevenData = document.getElementById('timer-seven');
timerSevenData.innerHTML = '';
let timerEightData = document.getElementById('timer-eight');
timerEightData.innerHTML = '';

// Create variables to set initial values of zone status

let sprinklerOne = document.getElementById('zone-one-activate');
sprinklerOne.innerHTML = STATUS_INACTIVE;
let sprinklerTwo = document.getElementById('zone-two-activate');
sprinklerTwo.innerHTML = STATUS_INACTIVE;
let sprinklerThree = document.getElementById('zone-three-activate');
sprinklerThree.innerHTML = STATUS_INACTIVE;
let sprinklerFour = document.getElementById('zone-four-activate');
sprinklerFour.innerHTML = STATUS_INACTIVE;
let sprinklerFive = document.getElementById('zone-five-activate');
sprinklerFive.innerHTML = STATUS_INACTIVE;
let sprinklerSix = document.getElementById('zone-six-activate');
sprinklerSix.innerHTML = STATUS_INACTIVE;
let sprinklerSeven = document.getElementById('zone-seven-activate');
sprinklerSeven.innerHTML = STATUS_INACTIVE;
let sprinklerEight = document.getElementById('zone-eight-activate');
sprinklerEight.innerHTML = STATUS_INACTIVE;

// Countdown Functionality

// Retrieve API data for web app

$.ajax({
  url: "https://api.rach.io/1/public/person/info",
  type: 'GET',
  headers: {
    // Body parser module takes URLencoded string and turns it into an object
    Authorization: 'Bearer c3667b81-92a6-4913-b83c-64cc713cbc1e'
  },
  success: function (data) {
    console.log('success went through');

    // This next AJAX request was used to find the zone IDs

    $.ajax({
      url: "https://api.rach.io/1/public/device/f316b327-37e0-4b9f-adac-f4e0c55f323c",
      type: 'GET',
      headers: {
        Authorization: 'Bearer c3667b81-92a6-4913-b83c-64cc713cbc1e'
      },
      success: function (data) {
        console.log('API Request went through okay');

        // Verify that the data is parsed correctly
        let verifyData = JSON.stringify(data);
        allDeviceData = JSON.parse(verifyData);

        arrayOfDeviceZones = allDeviceData.zones;
        console.log(arrayOfDeviceZones);
      }
    });

    // ENSURE DATA IS PARASED CORRECTLY FROM THE API
    let verifyData = JSON.stringify(data);
    let allDeviceData = JSON.parse(verifyData);

    // STORE ARRAY OF ZONES INTO MEMORY
    let arrayOfDeviceZones = allDeviceData;
    console.log(arrayOfDeviceZones);

    // RUN ZONE ONE

    $('#zone-one-button').on('click', function (e) {
      e.preventDefault();
      sprinklerOne.innerHTML = TURNING_ON_WATER;

      let countVar = WATERING_DURATION;

      let ZoneOneUpdate = {
        id: "d759f362-746a-43e4-ab8d-9a071cda176a",
        duration: WATERING_DURATION
      };

      $.ajax({
        url: "https://api.rach.io/1/public/zone/start",
        type: 'PUT',
        data: JSON.stringify(ZoneOneUpdate),
        dataType: 'json',
        // contentType: 'application/json; charset=utf-8',
        headers: {
          Authorization: 'Bearer c3667b81-92a6-4913-b83c-64cc713cbc1e'
        },
        success: function (data) {
          console.log('Zone 1 PUT request has been processed');
          sprinklerOne.innerHTML = STATUS_ACTIVE;

          /*countDown('timer-one');*/

          let countVar = WATERING_DURATION;

          setInterval(function () {
            countVar--;
            $('#timer-one').html('Time left: ' + countVar);

            if (countVar > 1) {
              sprinklerOne.innerHTML = STATUS_ACTIVE;
            }
            if (countVar < 1) {
              $('#timer-one').html('');
              sprinklerOne.innerHTML = STATUS_INACTIVE;
            }
          }, 1000);
        }
      });
    });

    // RUN ZONE TWO
    $('#zone-two-button').on('click', function (e) {
      e.preventDefault();
      sprinklerTwo.innerHTML = TURNING_ON_WATER;

      let countVar = WATERING_DURATION;

      let ZoneTwoUpdate = {
        id: "0563e424-2df7-41a6-8427-a08dde7b8501",
        duration: WATERING_DURATION
      };

      $.ajax({
        url: "https://api.rach.io/1/public/zone/start",
        type: 'PUT',
        data: JSON.stringify(ZoneTwoUpdate),
        dataType: 'json',
        // contentType: 'application/json; charset=utf-8',
        headers: {
          Authorization: 'Bearer c3667b81-92a6-4913-b83c-64cc713cbc1e'
        },
        success: function (data) {
          console.log('Zone 2 PUT request has been processed');
          sprinklerTwo.innerHTML = STATUS_ACTIVE;

          /*countDown('timer-one');*/

          let countVar = WATERING_DURATION;

          setInterval(function () {
            countVar--;
            $('#timer-two').html('Time left: ' + countVar);

            if (countVar > 1) {
              sprinklerTwo.innerHTML = STATUS_ACTIVE;
            }
            if (countVar < 1) {
              $('#timer-two').html('');
              sprinklerTwo.innerHTML = STATUS_INACTIVE;
            }
          }, 1000);
        }
      });
    });

    // RUN ZONE THREE
    $('#zone-three-button').on('click', function (e) {
      e.preventDefault();
      sprinklerThree.innerHTML = TURNING_ON_WATER;

      let countVar = WATERING_DURATION;

      let ZoneThreeUpdate = {
        id: "52580ea2-b7ea-4b85-83c6-64d1332d26a2",
        duration: WATERING_DURATION
      };

      $.ajax({
        url: "https://api.rach.io/1/public/zone/start",
        type: 'PUT',
        data: JSON.stringify(ZoneThreeUpdate),
        dataType: 'json',
        // contentType: 'application/json; charset=utf-8',
        headers: {
          Authorization: 'Bearer c3667b81-92a6-4913-b83c-64cc713cbc1e'
        },
        success: function (data) {
          console.log('Zone 3 PUT request has been processed');
          sprinklerThree.innerHTML = STATUS_ACTIVE;

          /*countDown('timer-one');*/

          let countVar = WATERING_DURATION;

          setInterval(function () {
            countVar--;
            $('#timer-three').html('Time left: ' + countVar);

            if (countVar > 1) {
              sprinklerThree.innerHTML = STATUS_ACTIVE;
            }
            if (countVar < 1) {
              $('#timer-three').html('');
              sprinklerThree.innerHTML = STATUS_INACTIVE;
            }
          }, 1000);
        }
      });
    });

    // RUN ZONE FOUR
    $('#zone-four-button').on('click', function (e) {
      e.preventDefault();
      sprinklerFour.innerHTML = TURNING_ON_WATER;

      let countVar = WATERING_DURATION;

      let ZoneFourUpdate = {
        id: "c731fc59-fee6-4c89-aeaf-7b1e7f30f44c",
        duration: WATERING_DURATION
      };

      $.ajax({
        url: "https://api.rach.io/1/public/zone/start",
        type: 'PUT',
        data: JSON.stringify(ZoneFourUpdate),
        dataType: 'json',
        // contentType: 'application/json; charset=utf-8',
        headers: {
          Authorization: 'Bearer c3667b81-92a6-4913-b83c-64cc713cbc1e'
        },
        success: function (data) {
          console.log('Zone 4 PUT request has been processed');
          sprinklerFour.innerHTML = STATUS_ACTIVE;

          /*countDown('timer-one');*/

          let countVar = WATERING_DURATION;

          setInterval(function () {
            countVar--;
            $('#timer-four').html('Time left: ' + countVar);

            if (countVar > 1) {
              sprinklerFour.innerHTML = STATUS_ACTIVE;
            }
            if (countVar < 1) {
              $('#timer-four').html('');
              sprinklerFour.innerHTML = STATUS_INACTIVE;
            }
          }, 1000);
        }
      });
    });

    // RUN ZONE FIVE
    $('#zone-five-button').on('click', function (e) {
      e.preventDefault();
      sprinklerFive.innerHTML = TURNING_ON_WATER;

      let countVar = WATERING_DURATION;

      let ZoneFiveUpdate = {
        id: "5c4c89cc-f488-40bd-a452-20b0db923798",
        duration: WATERING_DURATION
      };

      $.ajax({
        url: "https://api.rach.io/1/public/zone/start",
        type: 'PUT',
        data: JSON.stringify(ZoneFiveUpdate),
        dataType: 'json',
        // contentType: 'application/json; charset=utf-8',
        headers: {
          Authorization: 'Bearer c3667b81-92a6-4913-b83c-64cc713cbc1e'
        },
        success: function (data) {
          console.log('Zone 5 PUT request has been processed');
          sprinklerFive.innerHTML = STATUS_ACTIVE;

          /*countDown('timer-one');*/

          let countVar = WATERING_DURATION;

          setInterval(function () {
            countVar--;
            $('#timer-five').html('Time left: ' + countVar);

            if (countVar > 1) {
              sprinklerFive.innerHTML = STATUS_ACTIVE;
            }
            if (countVar < 1) {
              $('#timer-five').html('');
              sprinklerFive.innerHTML = STATUS_INACTIVE;
            }
          }, 1000);
        }
      });
    });

    // RUN ZONE SIX
    $('#zone-six-button').on('click', function (e) {
      e.preventDefault();
      sprinklerSix.innerHTML = TURNING_ON_WATER;

      let countVar = WATERING_DURATION;

      let ZoneSixUpdate = {
        id: "70a37dce-5d67-4253-b54f-a91abc846db8",
        duration: WATERING_DURATION
      };

      $.ajax({
        url: "https://api.rach.io/1/public/zone/start",
        type: 'PUT',
        data: JSON.stringify(ZoneSixUpdate),
        dataType: 'json',
        // contentType: 'application/json; charset=utf-8',
        headers: {
          Authorization: 'Bearer c3667b81-92a6-4913-b83c-64cc713cbc1e'
        },
        success: function (data) {
          console.log('Zone 6 PUT request has been processed');
          sprinklerSix.innerHTML = STATUS_ACTIVE;

          /*countDown('timer-one');*/

          let countVar = WATERING_DURATION;

          setInterval(function () {
            countVar--;
            $('#timer-six').html('Time left: ' + countVar);

            if (countVar > 1) {
              sprinklerSix.innerHTML = STATUS_ACTIVE;
            }
            if (countVar < 1) {
              $('#timer-six').html('');
              sprinklerSix.innerHTML = STATUS_INACTIVE;
            }
          }, 1000);
        }
      });
    });

    // RUN ZONE SEVEN
    $('#zone-seven-button').on('click', function (e) {
      e.preventDefault();
      sprinklerSeven.innerHTML = TURNING_ON_WATER;

      let countVar = WATERING_DURATION;

      let ZoneSevenUpdate = {
        id: "7a3800e1-2e44-4604-9294-451441a9fa3d",
        duration: WATERING_DURATION
      };

      $.ajax({
        url: "https://api.rach.io/1/public/zone/start",
        type: 'PUT',
        data: JSON.stringify(ZoneSevenUpdate),
        dataType: 'json',
        // contentType: 'application/json; charset=utf-8',
        headers: {
          Authorization: 'Bearer c3667b81-92a6-4913-b83c-64cc713cbc1e'
        },
        success: function (data) {
          console.log('Zone 7 PUT request has been processed');
          sprinklerSeven.innerHTML = STATUS_ACTIVE;

          /*countDown('timer-one');*/

          let countVar = WATERING_DURATION;

          setInterval(function () {
            countVar--;
            $('#timer-seven').html('Time left: ' + countVar);

            if (countVar > 1) {
              sprinklerSeven.innerHTML = STATUS_ACTIVE;
            }
            if (countVar < 1) {
              $('#timer-seven').html('');
              sprinklerSeven.innerHTML = STATUS_INACTIVE;
            }
          }, 1000);
        }
      });
    });

    // RUN ZONE EIGHT
    $('#zone-eight-button').on('click', function (e) {
      e.preventDefault();
      sprinklerEight.innerHTML = TURNING_ON_WATER;

      let countVar = WATERING_DURATION;

      let ZoneEightUpdate = {
        id: "08374eef-2c72-443c-b4c0-7c18fd006b32",
        duration: WATERING_DURATION
      };

      $.ajax({
        url: "https://api.rach.io/1/public/zone/start",
        type: 'PUT',
        data: JSON.stringify(ZoneEightUpdate),
        dataType: 'json',
        // contentType: 'application/json; charset=utf-8',
        headers: {
          Authorization: 'Bearer c3667b81-92a6-4913-b83c-64cc713cbc1e'
        },
        success: function (data) {
          console.log('Zone 8 PUT request has been processed');
          sprinklerEight.innerHTML = STATUS_ACTIVE;

          /*countDown('timer-one');*/

          let countVar = WATERING_DURATION;

          setInterval(function () {
            countVar--;
            $('#timer-eight').html('Time left: ' + countVar);

            if (countVar > 1) {
              sprinklerEight.innerHTML = STATUS_ACTIVE;
            }
            if (countVar < 1) {
              $('#timer-eight').html('');
              sprinklerEight.innerHTML = STATUS_INACTIVE;
            }
          }, 1000);
        }
      });
    });

    // RUN ALL ZONES

    $('#turn-on-all-sprinklers').on('click', function (e) {
      e.preventDefault();
      sprinklerOne.innerHTML = TURNING_ON_WATER;
      sprinklerTwo.innerHTML = TURNING_ON_WATER;
      sprinklerThree.innerHTML = TURNING_ON_WATER;
      sprinklerFour.innerHTML = TURNING_ON_WATER;
      sprinklerFive.innerHTML = TURNING_ON_WATER;
      sprinklerSix.innerHTML = TURNING_ON_WATER;
      sprinklerSeven.innerHTML = TURNING_ON_WATER;
      sprinklerEight.innerHTML = TURNING_ON_WATER;

      let countVar = WATERING_DURATION;

      let multiZoneUpdate = {
        zones: [{
          id: "d759f362-746a-43e4-ab8d-9a071cda176a",
          duration: WATERING_DURATION
        }, {
          id: "0563e424-2df7-41a6-8427-a08dde7b8501",
          duration: WATERING_DURATION
        }, {
          id: "52580ea2-b7ea-4b85-83c6-64d1332d26a2",
          duration: WATERING_DURATION
        }, {
          id: "c731fc59-fee6-4c89-aeaf-7b1e7f30f44c",
          duration: WATERING_DURATION
        }, {
          id: "5c4c89cc-f488-40bd-a452-20b0db923798",
          duration: WATERING_DURATION
        }, {
          id: "70a37dce-5d67-4253-b54f-a91abc846db8",
          duration: WATERING_DURATION
        }, {
          id: "7a3800e1-2e44-4604-9294-451441a9fa3d",
          duration: WATERING_DURATION
        }, {
          id: "08374eef-2c72-443c-b4c0-7c18fd006b32",
          duration: WATERING_DURATION
        }]
      };

      $.ajax({
        url: "https://api.rach.io/1/public/zone/start_multiple",
        type: 'PUT',
        data: JSON.stringify(multiZoneUpdate),
        dataType: 'json',
        // contentType: 'application/json; charset=utf-8',
        headers: {
          Authorization: 'Bearer c3667b81-92a6-4913-b83c-64cc713cbc1e'
        },
        success: function (data) {
          console.log('The All Zones PUT request has been processed');
          sprinklerOne.innerHTML = STATUS_ACTIVE;
          sprinklerTwo.innerHTML = STATUS_ACTIVE;
          sprinklerThree.innerHTML = STATUS_ACTIVE;
          sprinklerFour.innerHTML = STATUS_ACTIVE;
          sprinklerFive.innerHTML = STATUS_ACTIVE;
          sprinklerSix.innerHTML = STATUS_ACTIVE;
          sprinklerSeven.innerHTML = STATUS_ACTIVE;
          sprinklerEight.innerHTML = STATUS_ACTIVE;

          /*countDown('timer-one');*/

          let countVar = WATERING_DURATION;

          setInterval(function () {
            countVar--;
            $('.zone-timer').html('Time left: ' + countVar);

            if (countVar > 1) {
              sprinklerOne.innerHTML = STATUS_ACTIVE;
              sprinklerTwo.innerHTML = STATUS_ACTIVE;
              sprinklerThree.innerHTML = STATUS_ACTIVE;
              sprinklerFour.innerHTML = STATUS_ACTIVE;
              sprinklerFive.innerHTML = STATUS_ACTIVE;
              sprinklerSix.innerHTML = STATUS_ACTIVE;
              sprinklerSeven.innerHTML = STATUS_ACTIVE;
              sprinklerEight.innerHTML = STATUS_ACTIVE;
            }
            if (countVar < 1) {
              $('.zone-timer').html('');
              sprinklerOne.innerHTML = STATUS_INACTIVE;
              sprinklerTwo.innerHTML = STATUS_INACTIVE;
              sprinklerThree.innerHTML = STATUS_INACTIVE;
              sprinklerFour.innerHTML = STATUS_INACTIVE;
              sprinklerFive.innerHTML = STATUS_INACTIVE;
              sprinklerSix.innerHTML = STATUS_INACTIVE;
              sprinklerSeven.innerHTML = STATUS_INACTIVE;
              sprinklerEight.innerHTML = STATUS_INACTIVE;
            }
          }, 1000);
        }
      });
    });
  }
});

// RETRIEVE THE DATA FROM API WITH XMLHttp REQUEST OBJECT
// ENDED UP USING DIFFERENT SYNTAX, BUT WANTED TO KEEP THIS HERE FOR REFERENCE

/*

	let xhr = new XMLHttpRequest(); 
	xhr.open("GET", "https://api.rach.io/1/public/person/info", true);
	xhr.onreadystatechange = function () {
		let userInfo = null;

		if (xhr.readyState < 4 || xhr.status != 200) return; 
		if (xhr.status === 200) {
			userInfo = JSON.parse(xhr.responseText);
		}

		console.log(xhr);
		console.log(userInfo);
	};
	xhr.setRequestHeader('Authorization', 'Bearer c3667b81-92a6-4913-b83c-64cc713cbc1e');
	xhr.send();

*/