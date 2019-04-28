
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.viewOverview = function(req, res){
  res.render('overview');
};
