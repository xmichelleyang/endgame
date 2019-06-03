/* Description: newMed.js is the JavaScript Helper file for addMed.handlebars.
 * Its purpose is to allow the user to upload a new medicine, complete with
 * several fields (i.e. description, dosage, time taken and side effects)
 * to the database. This requires newMed.js to handle several onClicks,
 * to edit medicinal information as well as add timesets for dosage.
 */

/************************************************************************/

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

  var d = new Date();
  var curTime = d.getHours() + ":" + d.getMinutes();

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

  var times = new Object();
  times["Monday"] = new Set();
  times["Tuesday"] = new Set();
  times["Wednesday"] = new Set();
  times["Thursday"] = new Set();
  times["Friday"] = new Set();
  times["Sunday"] = new Set();
  times["Saturday"] = new Set();

  function addRow(id, time, day) {
    time = time.trim();
    console.log("trying to add");
    $("#" + id).append(`<div id=${time} style="padding:7px;"> <div class="left-align"> ${time} </div>  <div class="right-align" style="margin-right:10px;"> <ion-icon name="close"></ion-icon> </div><br> </div>`);
    $('.right-align').bind('click', function() { removeRow($(this)) });
    times[day].add(time);
    console.log(times);

    function removeRow(button) {
      console.log("oooo");
      var row = button.parent();
      var name = row.attr("id");
      console.log("row: ", row)
      console.log("name: ", name);
      if( name == time && confirm("Do you want to delete: " + time)) {
        console.log("trying to remove #", time)
        row.remove();
        times[day].delete(time)
      }
      console.log(times);
    }
  }

  $("#addToMon").click(() => {
    const day = "Monday";
    var time = $("#medTimeMon").val();

   if (times[day].has(time)) {
      alert("This time already exists");
    }
    else {
      addRow("monTimes", time, day);
    }
  })

  $("#addToTue").click(() => {
    const day = "Tuesday";
    var time = $("#medTimeTue").val();
    if (times[day].has(time)) {
      alert("This time already exists");
    }
    else {
      addRow("tueTimes", time, day);
    }
  });

  $("#addToWed").click(() => {
    const day = "Wednesday";
    var time = $("#medTimeWed").val();
    if (times[day].has(time)) {
      alert("This time already exists");
    }
    else {
      addRow("wedTimes", time, day);
    }
  });

  $("#addToThu").click(() => {
    const day = "Thursday";
    var time = $("#medTimeThu").val();
    if (times[day].has(time)) {
      alert("This time already exists");
    }
    else {
      addRow("thuTimes", time, day);
    }
  });

  $("#addToFri").click(() => {
    const day = "Friday";
    var time = $("#medTimeFri").val();
    if (times[day].has(time)) {
      alert("This time already exists");
    }
    else {
      addRow("friTimes", time, day);
    }
  });

  $("#addToSat").click(() => {
    const day = "Saturday";
    var time = $("#medTimeSat").val();
    if (times[day].has(time)) {
      alert("This time already exists");
    }
    else {
      addRow("satTimes", time, day);
    }
  });

  $("#addToSun").click(() => {
    const day = "Sunday";
    var time = $("#medTimeSun").val();
    if (times[day].has(time)) {
      alert("This time already exists");
    }
    else {
      addRow("sunTimes", time, day);
    }
  });

  $("#addAll").click(() => {
    console.log("clicked");
    const name = $("#medNameBox").val();
    const desc = $("#medDescBox").val();
    const side_effects = $("#medSideEffectsBox").val();
    const dosage = $("#medDosageBox").val();
    console.log("times", times);
    console.log("times[Mon]", times["Monday"]);

    if (confirm("Would you like to add " + name + " to your medications?")) {
      database.ref("user_meds/" + name).update({
        name: name,
        desc: desc,
        side_effects: side_effects,
        dosage: dosage,
        Monday: Array.from(times["Monday"]),
        Tuesday: Array.from(times["Tuesday"]),
        Wednesday: Array.from(times["Wednesday"]),
        Thursday: Array.from(times["Thursday"]),
        Friday: Array.from(times["Friday"]),
        Sunday: Array.from(times["Sunday"]),
        Saturday: Array.from(times["Saturday"])
      });
    }

    window.location ="/home";
  });

});

function checkValidity(n, d) {
  return (n == "") || (d == "");
}
