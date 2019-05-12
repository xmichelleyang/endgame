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

  var cal = {
    "Mon": [],
    "Tue": [],
    "Wed": [],
    "Thu": [],
    "Fri": [],
    "Sat": [],
    "Sun": [],
  };
  // cal['Mon'].push({
  //   "Advil": "4pm"
  // });
  // cal['Mon'].push({
  //   "Tylenol": "5pm"
  // });
  // console.log(cal);

  // database.ref("user_meds/Im dying").on("value", (snapshot) => { //
  //   const medSchedule = snapshot.val();
  //   // console.log("days", medSchedule);
  // });

  database.ref("user_meds/").on("value", (snapshot) => {
    const allMedications = snapshot.val();
    if (allMedications) {
      $("#user-info").html("");
      Object.keys(allMedications).forEach((med) => {
        database.ref("user_meds/" + med).on("value", (snapshot) => { //
          var medSchedule = snapshot.val();
          // console.log(medSchedule);
          Object.keys(medSchedule).forEach((sched) => {
            // console.log(sched);
            // Checking for Monday Medicines
            if (sched === "Monday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                // console.log(med + " is to be taken on " + sched + " " + medTime.time);
                var newSched = {[med]: medTime.time};
                // console.log(newSched);
                cal['Mon'].push(newSched);
                // cal['Mon'].push({
                //   [med]: medTime.time
                // });
                $("#med-mon").append(`\n` + med + ` : ` + medTime.time);
                // $("#med-monday").append(JSON.stringify(newSched));
                // $("#user-med-schedule").append(`
                // <h4 class="card-header"> Monday </h4>
                //   ` + JSON.stringify(cal["Mon"]));
              })
            }
            // Likewise, Tuesday
            if (sched === "Tuesday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                var newSched = {[med]: medTime.time};
                cal['Tue'].push(newSched);
                $("#med-tue").append(`\n` + med + ` : ` + medTime.time);
              })
            }
            if (sched === "Wednesday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                var newSched = {[med]: medTime.time};
                cal['Wed'].push(newSched);
                $("#med-wed").append(`\n` + med + ` : ` + medTime.time);
              })
            }
            if (sched === "Thursday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                var newSched = {[med]: medTime.time};
                cal['Thu'].push(newSched);
                $("#med-thu").append(`\n` + med + ` : ` + medTime.time);
              })
            }
            if (sched === "Friday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                var newSched = {[med]: medTime.time};
                cal['Fri'].push(newSched);
                $("#med-fri").append(`\n` + med + ` : ` + medTime.time);
              })
            }
            if (sched === "Saturday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                var newSched = {[med]: medTime.time};
                cal['Sat'].push(newSched);
                $("#med-sat").append(`\n` + med + ` : ` + medTime.time);
              })
            }
            if (sched === "Sunday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                var newSched = {[med]: medTime.time};
                cal['Sun'].push(newSched);
                $("#med-sun").append(`\n` + med + ` : ` + medTime.time);
              })
            }
          })
        }); //
      })
    }
  });
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


});
