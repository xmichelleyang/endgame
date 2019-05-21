$(document).ready (() => {

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


    // Load in user data
    database.ref("user_info/").on("value", (snapshot) => {
      const userInfo = snapshot.val();
      $("#userName").html(userInfo.name);
      $("#phone").html(userInfo.phone);
      $("#email").html(userInfo.email);
      // $(#"profilePhoto").src();
    });


    // Load in medicines
		database.ref("user_meds/").on("value", (snapshot) => {
			const allMedications = snapshot.val();
			console.log("All medications so far", allMedications);

			// If there are users that exist
			if(allMedications) {
				$("#user-info").html("");
				Object.keys(allMedications).forEach((med) => {
          $("#user-info").append(`
          		<div class="card bg-light mb-3">
          			<h5 class="card-header"> ${med} </h5>
          			<div class="card-body">
                Dosage: ${med.dosage} <br>
                Side Effects: ${med.side_effects} <br>
          			</div>
          		</div>`);
				})
			}
		});




    // Update user's information
    $("#userNameClick").click(() => {
      var change = prompt('What would you like to change your name to?');
    	// If user presses cancel
    	if (change == null) {
        	return
        }
      database.ref('user_info').update({
        name: change
      });
    });


    $("#phoneClick").click(() => {
      var change = prompt('What would you like to change your phone number to?');
    	// If user presses cancel
    	if (change == null) {
        	return
      }
      database.ref('user_info').update({
        phone: change
      });

    });

    $("#emailClick").click(() => {

      var change = prompt('What would you like to change your email to?');
      // If user presses cancel
      if (change == null) {
          return
      }
      database.ref('user_info').update({
        email: change
      });

    });

	});
