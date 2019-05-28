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

  $("#addToMon").click(() => {
    const name = $("#medNameBox").val();
    const desc = $("#medDescBox").val();
    const side_effects = $("#medSideEffectsBox").val();
    const dosage = $("#medDosageBox").val();
    if (checkValidity(name, dosage)) {
      alert("Insert name and dosage");
      return;
    } else {
      const day = "Monday";
      var time = $("#medTimeMon").val();
      if (confirm("Would you like to add " + name + " to " + day + " at " + time + "\?")) {
        database.ref("user_meds/" + name).update({
          Monday: time,
          name: name,
          desc: desc,
          side_effects: side_effects,
          dosage: dosage
        });
      }
    }
  })




  $("#addToTue").click(() => {
    const name = $("#medNameBox").val();
    const desc = $("#medDescBox").val();
    const side_effects = $("#medSideEffectsBox").val();
    const dosage = $("#medDosageBox").val();
    if (checkValidity(name, dosage)) {
      alert("Insert name and dosage");
      return;
    } else {
      var time = $("#medTimeTue").val();
      if (confirm("Would you like to add " + name + " to Tuesday at " + time + "\?")) {
        database.ref("user_meds/" + name).update({
          Tuesday: time,
          name: name,
          desc: desc,
          side_effects: side_effects,
          dosage: dosage
        });
      }
    }
  })

  $("#addToWed").click(() => {
    const name = $("#medNameBox").val();
    const desc = $("#medDescBox").val();
    const side_effects = $("#medSideEffectsBox").val();
    const dosage = $("#medDosageBox").val();
    if (checkValidity(name, dosage)) {
      alert("Insert name and dosage");
      return;
    } else {
      var time = $("#medTimeWed").val();
      if (confirm("Would you like to add " + name + " to Wednesday at " + time + "\?")) {
        database.ref("user_meds/" + name).update({
          Wednesday: time,
          name: name,
          desc: desc,
          side_effects: side_effects,
          dosage: dosage
        });
      }
    }
  })

  $("#addToThu").click(() => {
    const name = $("#medNameBox").val();
    const desc = $("#medDescBox").val();
    const side_effects = $("#medSideEffectsBox").val();
    const dosage = $("#medDosageBox").val();
    if (checkValidity(name, dosage)) {
      alert("Insert name and dosage");
      return;
    } else {
      var time = $("#medTimeThu").val();
      if (confirm("Would you like to add " + name + " to Thursday at " + time + "\?")) {
        database.ref("user_meds/" + name).update({
          Thursday: time,
          name: name,
          desc: desc,
          side_effects: side_effects,
          dosage: dosage
        });
      }
    }
  })

  $("#addToFri").click(() => {
    const name = $("#medNameBox").val();
    const desc = $("#medDescBox").val();
    const side_effects = $("#medSideEffectsBox").val();
    const dosage = $("#medDosageBox").val();
    if (checkValidity(name, dosage)) {
      alert("Insert name and dosage");
      return;
    } else {
      var time = $("#medTimeFri").val();
      if (confirm("Would you like to add " + name + " to Friday at " + time + "\?")) {
        database.ref("user_meds/" + name).update({
          Friday: time,
          name: name,
          desc: desc,
          side_effects: side_effects,
          dosage: dosage
        });
      }
    }
  })

  $("#addToSat").click(() => {
    const name = $("#medNameBox").val();
    const desc = $("#medDescBox").val();
    const side_effects = $("#medSideEffectsBox").val();
    const dosage = $("#medDosageBox").val();
    if (checkValidity(name, dosage)) {
      alert("Insert name and dosage");
      return;
    } else {
      var time = $("#medTimeSat").val();
      if (confirm("Would you like to add " + name + " to Saturday at " + time + "\?")) {
        database.ref("user_meds/" + name).update({
          Saturday: time,
          name: name,
          desc: desc,
          side_effects: side_effects,
          dosage: dosage
        });
      }
    }
  })

  $("#addToSun").click(() => {
    const name = $("#medNameBox").val();
    const desc = $("#medDescBox").val();
    const side_effects = $("#medSideEffectsBox").val();
    const dosage = $("#medDosageBox").val();
    if (checkValidity(name, dosage)) {
      alert("Insert name and dosage");
      return;
    } else {
      var time = $("#medTimeSun").val();
      if (confirm("Would you like to add " + name + " to Sunday at " + time + "\?")) {
        database.ref("user_meds/" + name).update({
          Sunday: time,
          name: name,
          desc: desc,
          side_effects: side_effects,
          dosage: dosage
        });
      }
    }
  })
});

function checkValidity(n, d) {
  return (n == "") || (d == "");
}

function toFB(database, name, time, desc, side_effects, dosage) {
  // console.log(name);
  database.ref("user_meds/" + name).set({
    Tuesday: time,
    name: name,
    desc: desc,
    side_effects: side_effects,
    dosage: dosage
  });
}
