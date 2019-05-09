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

		database.ref("user_meds/").on("value", (snapshot) => {
			const allMedications = snapshot.val();
			console.log("All medications so far", allMedications);

			// If there are users that exist
			if(allMedications) {
				$("#user-info").html("");
				Object.keys(allMedications).forEach((med) => {
					$("#user-info").append("<li>" + med + "</li>");
				})
			}
		});


		//
		// $.ajax({
		// 	url: 'data',
		// 	type: 'GET',
		// 	dataType: 'json',
		// 	success: (data) => {
		// 		console.log("Ajax successful", data );
		// 		$("#user-name").html("<p>" + data["name"] + "</p>");
		// 		$("#user-info").html("<p><strong>Medications: </strong><br>" + data["medications"] + "</p>");
		//
		// 	}
		// });


	});