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

  // var times = {};


  $("#addToMon").click(() => {
    const name = $("#medNameBox").val();
    const desc = $("#medDescBox").val();
    const side_effects = $("#medSideEffectsBox").val();
    const dosage = $("#medDosageBox").val();
    if (checkValidity(name, dosage)) {
      alert("Insert name and dosage");
      return;
    }
    else {
      const day = "Monday"; // document.getElementById("addMedDay").innerHTML;
      var time = $("#medTimeMon").val(); //document.getElementById("medTimeMon").value;
      database.ref("user_meds/" + name).update({
        Monday: time,
        name: name,
        desc: desc,
        side_effects: side_effects,
        dosage: dosage
      });
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
    }
    else {
      var time = $("#medTimeTue").val(); //document.getElementById("medTimeMon").value;
      database.ref("user_meds/" + name).update({
        Tuesday: time,
        name: name,
        desc: desc,
        side_effects: side_effects,
        dosage: dosage
      });
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
    }
    else {
      var time = $("#medTimeWed").val(); //document.getElementById("medTimeMon").value;
      database.ref("user_meds/" + name).update({
        Wednesday: time,
        name: name,
        desc: desc,
        side_effects: side_effects,
        dosage: dosage
      });
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
    }
    else {
      var time = $("#medTimeThu").val(); //document.getElementById("medTimeMon").value;
      database.ref("user_meds/" + name).update({
        Thursday: time,
        name: name,
        desc: desc,
        side_effects: side_effects,
        dosage: dosage
      });
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
    }
    else {
      var time = $("#medTimeFri").val(); //document.getElementById("medTimeMon").value;
      database.ref("user_meds/" + name).update({
        Friday: time,
        name: name,
        desc: desc,
        side_effects: side_effects,
        dosage: dosage
      });
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
    }
    else {
      var time = $("#medTimeSat").val(); //document.getElementById("medTimeMon").value;
      database.ref("user_meds/" + name).update({
        Saturday: time,
        name: name,
        desc: desc,
        side_effects: side_effects,
        dosage: dosage
      });
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
    }
    else {
      var time = $("#medTimeSun").val(); //document.getElementById("medTimeMon").value;
      database.ref("user_meds/" + name).set({
        Sunday: time,
        name: name,
        desc: desc,
        side_effects: side_effects,
        dosage: dosage
      });
    }
  })
  // $("#addToMon").click(() => {
  //   const name = $("#medNameBox").val();
  //   const desc = $("#medDescBox").val();
  //   const side_effects = $("#medSideEffectsBox").val();
  //   const dosage = $("#medDosageBox").val();
  //   if (checkValidity(name, dosage)) {
  //     alert("Insert name and dosage");
  //     return;
  //   }
  //   else {
  //     const day = "Monday"; // document.getElementById("addMedDay").innerHTML;
  //     var time = $("#medTimeMon").val(); //document.getElementById("medTimeMon").value;
  //     database.ref("user_meds/" + name).set({
  //       Monday: time,
  //       name: name,
  //       desc: desc,
  //       side_effects: side_effects,
  //       dosage: dosage
  //     });
  //   }
  //   // toFB(database, name, time, desc, side_effects, dosage);
  //   // times[day] = time;
  //   // console.log(times);
  // })


//
//   $("#addNewMed").click(() => {
//
//     const name = $("#medNameBox").val();
//     // const time = $("#medTimeBox").val();
//     // const day = document.getElementById("addMedDay").innerHTML;
//     // var time = document.getElementById("medTime").value;
//     // medTime
//     // console.log(day);
//     // console.log(time);
//
//     // var times = {};
//     // times[day] = time;
//     // console.log(times);
//     const desc = $("#medDescBox").val();
//     const side_effects = $("#medSideEffectsBox").val();
//     const dosage = $("#medDosageBox").val();
//     // console.log("input was", name);
//     $("#addToTue").click(() => {
//       const day = "Tuesday"; // document.getElementById("addMedDay").innerHTML;
//       var time = $("#medTimeTue").val(); //document.getElementById("medTimeMon").value;
//       // times[day] = time;
//       console.log(times);
//       // database.ref("user_meds/" + name).set({
//       //   Tuesday: time,
//       //   name: name,
//       //   desc: desc,
//       //   side_effects: side_effects,
//       //   dosage: dosage
//       // });
//     })
//     // console.log(times);
//     //
//     // database.ref("user_meds/" + name).set({
//     //   Monday: time,
//     //   name: name,
//     //   desc: desc,
//     //   side_effects: side_effects,
//     //   dosage: dosage
//     // });
//
//     // alert("Added Successfully");
//
//     // window.location = "/home";
//   });
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
// var times = {};
//
// function addToMon() {
//   const day = "Monday"; // document.getElementById("addMedDay").innerHTML;
//   var time = document.getElementById("medTimeMon").value;
//   times[day] = time;
//   console.log(times);
// }

// function addToTue() {
//   const day = "Tuesday";
//   var time = document.getElementById("medTimeTue").value;
//   times[day] = time;
//   console.log(times);
// }
//
// function addToWed() {
//   const day = "Wednesday";
//   var time = document.getElementById("medTimeWed").value;
//   times[day] = time;
// }
//
// function addToThu() {
//   const day = "Thursday";
//   var time = document.getElementById("medTimeThu").value;
//   times[day] = time;
// }
//
// function addToFri() {
//   const day = "Friday";
//   var time = document.getElementById("medTimeFri").value;
//   times[day] = time;
// }
//
// function addToSat() {
//   const day = "Saturday";
//   var time = document.getElementById("medTimeSat").value;
//   times[day] = time;
// }
//
// function addToSun() {
//   const day = "Sunday";
//   var time = document.getElementById("medTimeSun").value;
//   times[day] = time;
//   console.log(times);
// }
