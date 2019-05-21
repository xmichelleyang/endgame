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
	database.ref("user_meds/" + medName).once("value", (snapshot) => {
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
        <h5 class="card-header">Consumption Times</h5>
        <div class="card-body">
          <p class="card-text"> <ul> <div id="loadedDates"> </div> </ul> </p>
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
        <h5 class="card-header">Dosage</h5>
        <div class="card-body">
          <p class="card-text"> ${dosage} </p>
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
        <h5 class="card-header">Description</h5>
        <div class="card-body">
          <p class="card-text">${description}!</p>
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
        <h5 class="card-header">Side Effects</h5>
  			<div class="card-body">
  				<p class="card-text">${side_effects}!</p>
  			</div>
      `);
	  }

  });

});
