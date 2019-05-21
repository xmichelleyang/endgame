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

  // Adding
  // console.log("hello");
  $("#addNewMed").click(() => {

    // console.log("OMG!!");
    const name = $("#medNameBox").val();
    const time = $("#medTimeBox").val();
    const day = document.getElementById('addMedDay');
    console.log(day);
    //FIXME
    var ampm; //= document.getElementById("medTimeBox2").checked;
    // var ampm2 = document.getElementById("medTimeBox3").checked;
    // console.log(document.getElementById("medTimeBox2"));
    //if (document.getElementById("medTimeBox2").checked)
      ampm = "am";
    // if (document.getElementById("medTimeBox3") != null)
    //   ampm = "pm";
    // time;
    // console.log(time);
    const desc = $("#medDescBox").val();
    const side_effects = $("#medSideEffectsBox").val();
    const dosage = $("#medDosageBox").val();
    // console.log("input was", name);

    //
    // database.ref("user_meds/" + name).set({
    //   name: name,
    //   desc: desc,
    //   side_effects: side_effects,
    //   dosage: dosage
    // });

    // alert("Added Successfully");

    // window.location = "/home";
  });
});


function addMedSched() {
  // var number = document.getElementsByClassName('form-control').length;
  // var locations = [];
  // var startDates = [];
  // var endDates = [];
  if (document.getElementById('time') === "") {
    alert("Please isnert time");
    return;
  } else if (!(document.getElementById('pm') || document.getElementById('pm'))) {
    alert("Please select am pm");
    return;
  }
  var medTime = document.getElementById('time');
  console.log(medTime);
  if (document.getElementById('pm'))
    medTime.concat("pm");
  if (document.getElementById('am'))
    medTime.concat("am");

  alert(medTime);

}
