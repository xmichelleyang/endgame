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

  // Retrieve the template data from the HTML (jQuery is used here).
  // var template = $('#handlebars-demo').html();
  // // Compile the template data into a function
  // var templateScript = Handlebars.compile(template);
  // var days = {"ababab" : "Sunday"};
  // var html = templateScript(days);
  // // console.log(html);
  // // Insert the HTML code into the page
  // $('.addMedDays').append(html);
  // var oneDay = "Sunday";


  // Adding times
  $("#add-sun").click(() => {
    alert("hehe that tickles");
  });
  $("#add-mon").click(() => {
    alert("hehe that tickles");
  });
  $("#add-tue").click(() => {
    alert("hehe that tickles");
  });
  $("#add-wed").click(() => {
    alert("hehe that tickles");
  });
  $("#add-thur").click(() => {
    alert("hehe that tickles");
  });
  $("#add-fri").click(() => {
    alert("hehe that tickles");
  });
  $("#add-sat").click(() => {
    alert("hehe that tickles");
  });

  // David - Autofilling Description from database
  $("#autofillMed").click(() => {
    const name = $("#medNameBox").val();

    // Medicine name not input
    if (name == "") {
      alert("Please input a medicine first!");
    } else {
      database.ref("med_info/").on("value", (s) => {
        const allMeds = s.val();

        for (med in allMeds) {
          if (med.toLowerCase() == name.toLowerCase()) {
            $("#medDescBox").val(allMeds[med].Description);
            alert("Successfully added the description!");
            break;
          }
        }

        if ($("#medDescBox").val() == "") {
          alert("Sorry, we don't have the information for this medicine.");
        }
      });
    }

  })
  // $(".day-button").click(function() {
  //   window.location = "/home/" + this.id;
  // });

  // Adding
  // console.log("hello");
  $("#addNewMed").click(() => {

    // console.log("OMG!!");
    const name = $("#medNameBox").val();
    // const time = $("#medTimeBox").val();
    // const day = document.getElementById("addMedDay").innerHTML;
    // var time = document.getElementById("medTime").value;
    // medTime
    // console.log(day);
    // console.log(time);

    // var times = {};
    // times[day] = time;
    // console.log(times);


    const desc = $("#medDescBox").val();
    const side_effects = $("#medSideEffectsBox").val();
    const dosage = $("#medDosageBox").val();
    // console.log("input was", name);

    console.log(times);
    //
    // database.ref("user_meds/" + name).set({
    //   Monday: time,
    //   name: name,
    //   desc: desc,
    //   side_effects: side_effects,
    //   dosage: dosage
    // });

    alert("Added Successfully");

    // window.location = "/home";
  });
});
var times = {};

function addToMon() {
  const day = "Monday"; // document.getElementById("addMedDay").innerHTML;
  var time = document.getElementById("medTimeMon").value;
  times[day] = time;
}
function addToTue() {
  const day = "Tuesday";
  var time = document.getElementById("medTimeTue").value;
  times[day] = time;
}
function addToWed() {
  const day = "Wednesday";
  var time = document.getElementById("medTimeWed").value;
  times[day] = time;
}
function addToThu() {
  const day = "Thursday";
  var time = document.getElementById("medTimeThu").value;
  times[day] = time;
}
function addToFri() {
  const day = "Friday";
  var time = document.getElementById("medTimeFri").value;
  times[day] = time;
}
function addToSat() {
  const day = "Saturday";
  var time = document.getElementById("medTimeSat").value;
  times[day] = time;
}
function addToSun() {
  const day = "Sunday";
  var time = document.getElementById("medTimeSun").value;
  times[day] = time;
  console.log(times);
}
