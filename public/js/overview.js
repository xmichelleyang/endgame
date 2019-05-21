var cal = {
  "Mon": [],
  "Tue": [],
  "Wed": [],
  "Thu": [],
  "Fri": [],
  "Sat": [],
  "Sun": [],
};

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

  // var cal = {
  //   "Mon": [],
  //   "Tue": [],
  //   "Wed": [],
  //   "Thu": [],
  //   "Fri": [],
  //   "Sat": [],
  //   "Sun": [],
  // };
  cal['Mon'].push({
    "Advil": "4pm"
  });
  // cal['Mon'].push({
  //   "Tylenol": "5pm"
  // });
  // console.log(cal);

  database.ref("user_meds/").on("value", (snapshot) => {
    const allMedications = snapshot.val();
    if (allMedications) {
      $("#user-info").html("");
      Object.keys(allMedications).forEach((med) => {
        database.ref("user_meds/" + med).on("value", (snapshot) => { //
          var medSchedule = snapshot.val();
          Object.keys(medSchedule).forEach((sched) => {
            if (sched === "Monday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                var newSched = {
                  [med]: medTime.time
                };
                cal['Mon'].push(newSched);
                $("#med-mon").append(`\n` + med + ` : ` + medTime.time);
                // $("#med-monday").append(JSON.stringify(newSched));
                // $("#user-med-schedule").append(`
                // <h4 class="card-header"> Monday </h4>
                //   ` + JSON.stringify(cal["Mon"]));
              })
            }
            if (sched === "Tuesday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                var newSched = {
                  [med]: medTime.time
                };
                cal['Tue'].push(newSched);
                $("#med-tue").append(`\n` + med + ` : ` + medTime.time);
              })
            }
            if (sched === "Wednesday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                var newSched = {
                  [med]: medTime.time
                };
                cal['Wed'].push(newSched);
                $("#med-wed").append(`\n` + med + ` : ` + medTime.time);
              })
            }
            if (sched === "Thursday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                var newSched = {
                  [med]: medTime.time
                };
                cal['Thu'].push(newSched);
                $("#med-thu").append(`\n` + med + ` : ` + medTime.time);
              })
            }
            if (sched === "Friday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                var newSched = {
                  [med]: medTime.time
                };
                cal['Fri'].push(newSched);
                $("#med-fri").append(`\n` + med + ` : ` + medTime.time);
              })
            }
            if (sched === "Saturday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                var newSched = {
                  [med]: medTime.time
                };
                cal['Sat'].push(newSched);
                $("#med-sat").append(`\n` + med + ` : ` + medTime.time);
              })
            }
            if (sched === "Sunday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                var newSched = {
                  [med]: medTime.time
                };
                cal['Sun'].push(newSched);
                $("#med-sun").append(`\n` + med + ` : ` + medTime.time);

              })
            }
          })
        });
      })


    }

  });
  // $("#med-today").append("aaaa");

  document.addEventListener('DOMContentLoaded', function() {
    $("#med-today").append("aa");
   // your code here
  }, false);

  // $("#med-today").append(cal['Sun']);
  console.log(cal);
  // console.log(cal["Mon"]);

  // async function f() {
  //   // waits for 1 second, then result becomes 2
  //   let result = await new Thenable(5);
  //   alert(result);
  // }


  // $("#user-med-schedule").append(`
  // <h4 class="card-header"> Monday </h4>
  //   ` + JSON.stringify(cal["Mon"]));
  // JSON.stringify(cal["Mon"]))
  // $.ajax({
  // 	url: 'data',
  // 	type: 'GET',
  // 	dataType: 'json',
  // 	success: (data) => {
  // 		console.log("Ajax successful", data );
  // 		$("#user-name").html("<p>" + data["name"] + "</p>");
  // 		$("#user-info").html("<p><strong>Medications: </strong><br>" + data["medications"] + "</p>");
  //
  // 	}
  // });

  // David - Pressing Pill Button
  $(".day-button").click(function() {
    window.location = "/home/" + this.id;
  });

});
