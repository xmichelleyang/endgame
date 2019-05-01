
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.viewOverview = function(req, res){
  res.render('overview');
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

exports.medInfo = function(req, res){
  res.render('medInfo');
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

exports.medAll = function(req, res){
  res.render('medAll');
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
