/* Description: index.js composes the primary functionality of routing.
 * In addition, it helps to set up Firebase and Twilio, renders the necessary
 * .handlebars files according to user actions, and sets up scheduled SMS's
 * which remind users to take their medicine.
 */

/************************************************************************/

// Set Up Twilio
var twilio = require('twilio');
const accountSid = 'AC5d4754395733868cf8f756e8bead0bcb';
const authToken = 'fb0611f3f13dfc0476a70f6c391962f1';
var TWILIO_NUMBER = 13236010150;
var client = new twilio(accountSid, authToken);

// Set Up Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCNAO-j9z0dEE1Ko3f4icW96ze06beCHvw",
  authDomain: "cogs121-endgame.firebaseapp.com",
  databaseURL: "https://cogs121-endgame.firebaseio.com",
  projectId: "cogs121-endgame",
  storageBucket: "cogs121-endgame.appspot.com",
  messagingSenderId: "772708854408",
  appId: "1:772708854408:web:3f9503f52b026c3e"
};
var firebase = require('firebase');
var app = firebase.initializeApp(firebaseConfig);
const database = app.database();

// SMS Scheduling for Today's Med
// Getting today, i.e. Sunday
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
Date.prototype.getWeekDay = function() {
  return weekday[this.getDay()];
}
var today = new Date();
var todayDay = today.getWeekDay();
// Current Time in our ideal format
var curTime = today.getHours() + ":" + today.getMinutes();

// User Phone
var userPhone;
database.ref("user_info/").on("value", (snapshot) => {
  const userInfo = snapshot.val();
  userPhone = userInfo['phone'];
})

// Accessing Firebase for setting up Alarm
database.ref("user_meds/").on("value", (snapshot) => {
  // get user_meds and put its JSON to allMedications
  const allMedications = snapshot.val();
  for (var medName in allMedications) {
    var thisMed = allMedications[medName];
    // If alarm property is false, so we need to set up alarm
    if (!thisMed['alarm']) {
      for (var medInfo in thisMed) {
        // Get all keys with day (i.e. "Sunday")
        if (weekday.indexOf(medInfo) >= 0) {
          // Medication Time
          var medTimes = thisMed[medInfo];
          for (var medTimeIndex in medTimes) {
            var medTime = medTimes[medTimeIndex];

            // from 24hr format to 12hr format
            var H = +medTime.toString().substr(0, 2);
            var h = H % 12 || 12;
            var ampm = (H < 12 || H === 24) ? "AM" : "PM";
            var medTime12 = h + medTime.toString().substr(2, 3) + ampm;

            // Calculating Medication time - Current Time to set up Alarm
            // Currently only set alarm for the following week
            var dayDif = weekday.indexOf(medInfo) - weekday.indexOf(todayDay); // i.e. Monday - Sunday = 1
            // Getting current time format when before noon is #:##. The following makes it 0#:##, which match time in firebase
            if (curTime.charAt(1) == ':')
              curTime = "0" + curTime;
            var hhDif = medTime.toString().substr(0, 2) - curTime.toString().substr(0, 2);
            var mmDif = medTime.toString().substr(3, 5) - curTime.toString().substr(3, 5);

            // Time difference in milli second
            var alarmInMS = ((dayDif * 24 + hhDif) * 60 + mmDif) * 60000;

            // Handle a case that alarmInMS is negative, so a whole week needs to be added
            alarmInMS = (alarmInMS < 0) ? alarmInMS += (7 * 24 * 60 * 60 * 1000) : alarmInMS;
            console.log("Alarm is set in " + dayDif + " days " + hhDif + " HR " + mmDif + " Minutes to notify that " + medName + " needs to be taken at " + medTime12 + ". Text will be sent to " + userPhone + ".");
            // After "alarmInMS" milliseconds, sends out a text to remind of taking a medicine
            setTimeout(function() {
              client.messages.create({
                  body: 'It is ' + medTime12 + ' now. Take ' + medName + ". Have a nice day!",
                  to: userPhone,
                  from: '+13236010150' // Endgame Number
                })
                .then((message) => console.log(message.sid));
            }, alarmInMS);

            // Once alarm is set, update alarm property so it does not duplicate message
            database.ref("user_meds/" + medName).update({
              alarm: true
            });
          }
        }
      }
    }
  }
});

exports.view = function(req, res) {
  res.render('index');
};

exports.signUp = function(req, res) {
  res.render('signup');
};

exports.home = function(req, res) {
  const day = req.params.day;
  console.log(day);

  // If the day request is valid
  if (!day || typeof(day) == "undefined") {
    res.render('home');
  } else {
    // Create data object for webpage to read in
    const info = {
      day: day
    };
    // Render home with correct day
    res.render('home', info);
  }
};

exports.addMed = function(req, res) {
  res.render('addMed');
};

exports.error = function(req, res) {
  res.render('404');
}

exports.medInfo = function(req, res) {
  const meds = req.params.med;
  console.log("The medicine requested is: " + meds);

  // If the med request is valid
  if (!meds || typeof(meds) == "undefined") {
    console.log("No medicine found");
    return res.redirect('404');
  } else {

    // Create data object for webpage to read in
    const info = {
      med: meds
    };
    // Render medInfo with correct information
    res.render('medInfo', info);
  }
};

exports.overview = function(req, res) {
  res.render('overview');
};

exports.profile = function(req, res) {
  res.render('profile');
};

exports.day = function(req, res) {
  res.render('day');
};
