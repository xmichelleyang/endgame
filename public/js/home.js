$(document).ready(() => {

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCNAO-j9z0dEE1Ko3f4icW96ze06beCHvw",
    authDomain: "cogs121-endgame.firebaseapp.com",
    databaseURL: "https://cogs121-endgame.firebaseio.com",
    projectId: "cogs121-endgame",
    storageBucket: "cogs121-endgame.appspot.com",
    messagingSenderId: "772708854408",
    appId: "1:772708854408:web:3f9503f52b026c3e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Define it as database
  const database = firebase.database();

  Date.prototype.getWeekDay = function() {
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekday[this.getDay()];
  }

  var d = new Date();
  var day = $("#day").text();
  if (!day || day == "") {
    day = d.getWeekDay();
  }
  var curTime = d.getHours() + ":" + d.getMinutes();
  $("#today-date").append(day);

  database.ref("user_meds/").on("value", (snapshot) => {
    const allMedications = snapshot.val();
    if (allMedications) {
      $("#user-info").html("");
      Object.keys(allMedications).forEach((med) => {
        database.ref("user_meds/" + med).on("value", (snapshot) => { //
          var medSchedule = snapshot.val();
          var dosage = medSchedule.dosage;
          var side_effects = medSchedule.side_effects;
          Object.keys(medSchedule).forEach((sched) => {
            if (sched === day) {
              var time = snapshot.key;
              if (dosage == null)
                dosage = 0;
              if (side_effects == null)
                side_effects = "None";
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                // Time of Medication
                var medTime = snapshot.val();

                // Changing it from 24hr to 12hr format
                var H = +medTime.substr(0, 2);
                var h = H % 12 || 12;
                var ampm = (H < 12 || H === 24) ? "AM" : "PM";
                var medTime12 = h + medTime.substr(2, 3) + ampm;

                // Applying to Home Page
                $("#med-today").append(`
              		<div class="card bg-light mb-3" onclick="location.href='/medInfo/${med}'">

              			<h5 class="card-header"> ${med} <span style="float: right;"> ${medTime12} </span></h5>
              			<div class="card-body">
                    Dosage: ${dosage} </br>
                    Side Effects: ${side_effects}
              			</div>
              		</div>
                `);
              })
            }

          })
        });
      })
    }
  });




});
