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
      console.log("No dosage found!");
    }
    else {
      $("#medDosage").html(`
        <div class="card mb-3">
          <div class="card-header"><h5> <div class="left-align"> Dosage</div>  <div class="right-align" id="dosageRight">  <ion-icon class="clickable" style="margin-top:5px" id="dosageClick" name="create"></ion-icon> </div> </h5> </div>
          <div class="card-body">
            <p class="card-text" id="dosageDesc"> ${dosage} </p>
          </div>
        </div>
      `);
    }

    // Description
    description = data.desc;
    if (!description) {
      console.log("No description found!");
    }
    else {
      $("#medDesc").html(`
        <div class="card mb-3">
            <div class="card-header"><h5> <div class="left-align"> Description </div>   <div class="right-align" id="descClick" style="margin-top:5px">  <ion-icon class="clickable" id="descClick" name="create"></ion-icon> </div> </h5> </div>          <div class="card-body">
            <p class="card-text">${description}!</p>
          </div>
        </div>
      `);
    }

    // Side Effects
    side_effects = data.side_effects;
		if (!side_effects) {
      console.log("No side effects found!");
		}
    else {
			$("#medSideEffects").html(`
        <div class="card mb-3">
          <div class="card-header"><h5> <div class="left-align"> Side Effects </div>   <div class="right-align" id="sideEffectsClick" style="margin-top:5px">  <ion-icon class="clickable" id="sideEffectsClick" name="create"></ion-icon> </div> </h5> </div>
    			<div class="card-body">
    				<p class="card-text">${side_effects}!</p>
    			</div>
        </div>
      `);
	  }

      // Update user's information
      $("#dosageClick").click(() => {

        var prev = $("#dosageDesc").text().trim();

        $("#dosageRight").html(`<ion-icon class="clickable" name="close" id="dosNo"></ion-icon> <ion-icon class="clickable" name="checkmark" id="dosYes"></ion-icon>`)
        console.log("prev:", prev);
        $("#dosageDesc").html(`<div class="input-group">
          <div class="input-group-prepend">
          </div>
          <input id="dosageInput" class="form-control" value="${prev}"></input>
        </div>`);

        $("#dosNo").click(() => {
          console.log("woo");
        });

        $("#dosYes").click(() => {
          console.log("hehehe");
          typed = $("#dosageInput").val();

          database.ref('user_meds/' + medName).update({
            dosage: typed
          });

          $("#dosageDesc").html(typed);
          $("#dosageRight").html(` <ion-icon class="clickable" style="margin-top:5px" id="dosageClick" name="create"></ion-icon>`);

        });

    });


    $("#descClick").click(() => {
      var change = prompt('What would you like to change the description to?');
      // If user presses cancel
      if (change == null) {
          return
      }
      database.ref('user_meds/' + medName).update({
        desc: change
      });
    });

    $("#sideEffectsClick").click(() => {
      var change = prompt('What would you like to change the side effects to?');
      // If user presses cancel
      if (change == null) {
          return
      }
      database.ref('user_meds/' + medName).update({
        side_effects: change
      });
    });


  });




});
