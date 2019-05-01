
/**
 * Module dependencies.
 */

const express = require('express');
 // var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');

const app = express();
// var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('views')); // CHECKME


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/signup', index.signUp);
app.get('/home', index.home);
app.get('/overview', index.viewOverview);
app.get('/addMed', index.addMed);
app.get('/medInfo', index.medInfo);
app.get('/profile', index.profile);
app.get('/day', index.day);
app.get('/medAll', index.day);
app.get('/data', index.data);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
