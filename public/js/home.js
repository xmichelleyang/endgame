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
  var day = d.getWeekDay();
  $("#today-date").append(day);
  console.log(day);
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
              if (dosage == null)
                dosage = 0;
              if (side_effects == null)
                side_effects = "None";
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                // console.log(med + medTime.time);
                $("#med-today").append(`
                  		<div class="card bg-light mb-3" onclick="location.href='/medInfo'">
                  			<h5 class="card-header"> ${med} </h5>
                  			<div class="card-body">
                        Dosage: ${dosage} </br>
                        Side Effects: ${side_effects}
                  			</div>
                  		</div>`);
              })
            }

          })
        });
      })
    }
  });




});
