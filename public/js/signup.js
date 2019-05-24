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

  // Adding
  $("#signUp").click(() => {
    const name = $("#userName").val();
    const pw = $("#userPW").val();
    const email = $("#userEmail").val();
    const phone = $("#userPhone").val();
  	database.ref("user_info").update({
  		name: name,
      password: pw,
      email: email,
      phone: phone
  	});
  });
});
