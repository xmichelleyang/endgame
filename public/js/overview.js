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
                console.log(medTime);
                $("#med-mon").append(`\n` + med + ` : ` + medTime);
              })
            }
            if (sched === "Tuesday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                $("#med-tue").append(`\n` + med + ` : ` + medTime);
              })
            }
            if (sched === "Wednesday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                $("#med-wed").append(`\n` + med + ` : ` + medTime);
              })
            }
            if (sched === "Thursday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                $("#med-thu").append(`\n` + med + ` : ` + medTime);
              })
            }
            if (sched === "Friday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                $("#med-fri").append(`\n` + med + ` : ` + medTime);
              })
            }
            if (sched === "Saturday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                $("#med-sat").append(`\n` + med + ` : ` + medTime);
              })
            }
            if (sched === "Sunday") {
              database.ref("user_meds/" + med + "/" + sched).on("value", (snapshot) => {
                const medTime = snapshot.val();
                $("#med-sun").append(`\n` + med + ` : ` + medTime);

              })
            }
          })
        });
      })
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    $("#med-today").append("aa");
   // your code here
  }, false);

  // David - Pressing Pill Button
  $(".day-button").click(function() {
    window.location = "/home/" + this.id;
  });

});
