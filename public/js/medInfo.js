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

  const medName = $("#medName").text();
  console.log(medName);



  // Loading the data into the cards
	database.ref("user_meds/" + medName).on("value", (snapshot) => {
		const data = snapshot.val();
    console.log(data);

    if(data == null) {
      window.location = "/404";
    }
    // Consumption times
    dates = data.dates;
    if(!dates) {
      console.log("No dates found!");
    }
    else {
      $("#medDates").html(`
        <div class="card mb-3">
          <div class="card-header"><h5> <div class="left-align"> Consumption Times</div>   <div class="right-align" style="margin-top:5px">  <ion-icon class="clickable" id="consumptionClick" name="create"></ion-icon> </div> </h5> </div>
          <div class="card-body">
            <p class="card-text"> <ul> <div id="loadedDates"> </div> </ul> </p>
          </div>
        </div>
      `);

      Object.keys(dates).forEach((name)=> {
			     $("#loadedDates").append("<li>" + name + "</li>");

      });
    }

    // Dosage
    dosage = data.dosage;
    if(!dosage) {
      dosage = "None"
    }
    $("#medDosage").html(`
        <div class="card mb-3">
          <div class="card-header"><h5> <div class="left-align"> Dosage</div>  <div class="right-align" id="dosageRight">  <ion-icon class="clickable" style="margin-top:5px" id="dosageClick" name="create"></ion-icon> </div> </h5> </div>
          <div class="card-body">
            <p class="card-text" id="dosageDesc"> ${dosage} </p>
          </div>
        </div>
    `);

    // Description
    description = data.desc;
    if (!description) {
      description = "None"
    }
    $("#medDesc").html(`
      <div class="card mb-3">
        <div class="card-header"><h5> <div class="left-align"> Description </div>   <div class="right-align" id="descRight">  <ion-icon class="clickable" style="margin-top:5px" id="descClick" name="create"></ion-icon> </div> </h5> </div>
        <div class="card-body">
          <p class="card-text" id="descDesc">${description}</p>
        </div>
      </div>
    `);

    // Side Effects
    side_effects = data.side_effects;
		if (!side_effects) {
      side_effects = "None";
		}
		$("#medSideEffects").html(`
      <div class="card mb-3">
        <div class="card-header"><h5> <div class="left-align"> Side Effects </div>   <div class="right-align" id="sideEffectsRight">  <ion-icon class="clickable" style="margin-top:5px" id="sideEffectsClick" name="create"></ion-icon> </div> </h5> </div>
  			<div class="card-body">
  				<p class="card-text" id="sideEffectsDesc">${side_effects}</p>
  			</div>
      </div>
    `);


    // ---------------------------------------- ONCLICKS ----------------------------------------

    // Dosage
    $("#dosageClick").click(() => {
      // Get previous item
      var prev = $("#dosageDesc").text().trim();
      // Change upper right hand corner
      $("#dosageRight").html(`<ion-icon class="clickable" name="close" id="dosNo"></ion-icon> <ion-icon class="clickable" name="checkmark" id="dosYes"></ion-icon>`)
      // Create a textbox and populate it with the previous item
      $("#dosageDesc").html(`<div class="input-group">
        <div class="input-group-prepend">
        </div>
        <input id="dosageInput" class="form-control" value="${prev}"></input>
      </div>`);

      // User clicks no
      $("#dosNo").click(() => {
        // First clears dosage to update
        database.ref('user_meds/' + medName).update({
          dosage: ""
        });
        //Then sets to previous item
        database.ref('user_meds/' + medName).update({
          dosage: prev
        });
      });

      // User clicks yes
      $("#dosYes").click(() => {
        typed = $("#dosageInput").val();

        // First clears dosage to update
        database.ref('user_meds/' + medName).update({
          dosage: ""
        });

        //Then sets dosage to whatever was typed.
        database.ref('user_meds/' + medName).update({
          dosage: typed
        });

        if (typed == "None") {
          database.ref('user_meds/' + medName).update({
            dosage: "-1"
          });

          database.ref('user_meds/' + medName).update({
            dosage: ""
          });
        }

      });
    });

    // Description
    $("#descClick").click(() => {
      // Get previous item
      var prev = $("#descDesc").text().trim();
      // Change upper right hand corner
      $("#descRight").html(`<ion-icon class="clickable" name="close" id="descNo"></ion-icon> <ion-icon class="clickable" name="checkmark" id="descYes"></ion-icon>`)
      // Create a textbox and populate it with the previous item
      $("#descDesc").html(`<div class="input-group">
        <div class="input-group-prepend">
        </div>
        <input id="descInput" class="form-control" value="${prev}"></input>
      </div>`);

      // User clicks no
      $("#descNo").click(() => {

        // First clears dosage to update
        database.ref('user_meds/' + medName).update({
          desc: ""
        });
        //Then sets to previous item
        database.ref('user_meds/' + medName).update({
          desc: prev
        });
      });

      // User clicks yes
      $("#descYes").click(() => {
        typed = $("#descInput").val();

        // First clears dosage to update
        database.ref('user_meds/' + medName).update({
          desc: ""
        });

        //Then sets dosage to whatever was typed.
        database.ref('user_meds/' + medName).update({
          desc: typed
        });

        if (typed == "None") {
          database.ref('user_meds/' + medName).update({
            desc: "-1"
          });

          database.ref('user_meds/' + medName).update({
            desc: ""
          });
        }
      });
    });

    // Side Effects
    $("#sideEffectsClick").click(() => {
      // Get previous item
      var prev = $("#sideEffectsDesc").text().trim();
      // Change upper right hand corner
      $("#sideEffectsRight").html(`<ion-icon class="clickable" name="close" id="sideNo"></ion-icon> <ion-icon class="clickable" name="checkmark" id="sideYes"></ion-icon>`)
      // Create a textbox and populate it with the previous item
      $("#sideEffectsDesc").html(`<div class="input-group">
        <div class="input-group-prepend">
        </div>
        <input id="sideEffectsInput" class="form-control" value="${prev}"></input>
      </div>`);

      // User clicks no
      $("#sideNo").click(() => {
        // First clears dosage to update
        database.ref('user_meds/' + medName).update({
          side_effects: ""
        });
        //Then sets to previous item
        database.ref('user_meds/' + medName).update({
          side_effects: prev
        });
      });

      // User clicks yes
      $("#sideYes").click(() => {
        typed = $("#sideEffectsInput").val();

        // First clears dosage to update
        database.ref('user_meds/' + medName).update({
          side_effects: ""
        });

        //Then sets dosage to whatever was typed.
        database.ref('user_meds/' + medName).update({
          side_effects: typed
        });

        // If type is None
        if (typed == "None") {
          database.ref('user_meds/' + medName).update({
            side_effects: "-1"
          });
          database.ref('user_meds/' + medName).update({
            side_effects: ""
          });
        }

      });
    });


  });




});
