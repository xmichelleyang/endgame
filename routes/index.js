/*
 * GET home page.
 */

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
Date.prototype.getWeekDay = function() {
  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekday[this.getDay()];
}
var today = new Date();
var todayDay = today.getWeekDay();
var curTime = today.getHours() + ":" + today.getMinutes(); // Current Time in our ideal format

// User Phone
var userPhone;
database.ref("user_info/").on("value", (snapshot) => {
  const userInfo = snapshot.val();
  userPhone = userInfo['phone'];
})

// Accessing Firebase
database.ref("user_meds/").on("value", (snapshot) => {
  const allMedications = snapshot.val();
  for (var medName in allMedications) {
    var thisMed = allMedications[medName];
    for (var medInfo in thisMed) {
      if (medInfo === todayDay) {
        var medTime = thisMed[medInfo];

        // from 24hr format to 12hr format
        var H = +medTime.substr(0, 2);
        var h = H % 12 || 12;
        var ampm = (H < 12 || H === 24) ? "AM" : "PM";
        var medTime12 = h + medTime.substr(2, 3) + ampm;

        // console.log("take " + medName + "today at " + medTime + ", and text it to " + userPhone);
        // Calculating Medtime - Current Time
        var hhDif = medTime.substr(0, 2) - curTime.substr(0, 2);
        if (hhDif >= 0) { // If upcoming
          var mmDif = medTime.substr(3, 5) - curTime.substr(3, 5);
          // Time difference in milli second
          var alarmInMS = (hhDif * 60 + mmDif) * 60000;
          if (alarmInMS >= 0) {
            console.log("Alarm is set in " + alarmInMS + "ms to notify that " + medName + " needs to be taken at " + medTime12 + ". Text will be sent to " + userPhone + ".");
            setTimeout(function() {
              client.messages.create({
                  body: 'It is ' + medTime12 + ' now. Take ' + medName + ". Have a nice day!",
                  to: userPhone,
                  from: '+13236010150' // Endgame Number
                })
                .then((message) => console.log(message.sid));
            }, alarmInMS);
          }
        }
      }
    }
  }
});

// Test
// client.messages.create({
//     body: 'ENDGAME SMS TESTING',
//     to: '+12133990194',  // Mine
//     from: '+13236010150' // Endgame Number
// })
// .then((message) => console.log(message.sid));

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


const fakeDatabase = {
  name: "Iron Man",
  medications: [("Advil at 3pm Monday"), ("Advil at 5pm Tuesday"), ("Advil at 3pm Friday")]
}

exports.data = function(req, res) {
  console.log("Hello");
  res.send(fakeDatabase);
};
// exports.view = function signUp(){
//   res.render('signup');

// window.location.href = "./signup.handlebars";
// }
