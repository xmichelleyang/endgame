
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.signUp = function(req, res){
  res.render('signup');
};

exports.home = function(req, res){
  res.render('home');
};

exports.addMed = function(req, res){
  res.render('addMed');
};

exports.error = function(req, res){
  res.render('404');
}

exports.medInfo = function(req, res){
  const meds = req.params.med;
  console.log("The medicine requested is: " + meds);

  // If the med request is valid
  if(!meds || typeof(meds) == "undefined") {
    console.log("No medicine found");
    return res.redirect('404');
  }
  else {

    // Create data object for webpage to read in
    const info = {
      med: meds
    };
    // Render medInfo with correct information
    res.render('medInfo', info);
  }

};

exports.overview = function(req, res){
  res.render('overview');
};

exports.profile = function(req, res){
  res.render('profile');
};

exports.day = function(req, res){
  res.render('day');
};


const fakeDatabase = {
  name: "Iron Man",
  medications: [("Advil at 3pm Monday"), ("Advil at 5pm Tuesday"),("Advil at 3pm Friday")]
}

exports.data = function(req, res){
  console.log("Hello");
  res.send(fakeDatabase);
};
// exports.view = function signUp(){
//   res.render('signup');

    // window.location.href = "./signup.handlebars";
// }
