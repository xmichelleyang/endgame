
/**
 * Module dependencies.
 */

const express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');

// var twilio = require('twilio');
// const accountSid = 'AC5d4754395733868cf8f756e8bead0bcb';
// const authToken = 'fb0611f3f13dfc0476a70f6c391962f1';
// var twilio = require('twilio');
// var client = new twilio(accountSid, authToken);
//
// client.messages.create({
//     body: 'Hello from Node',
//     to: '+12133990194',  // Mine
//     from: '+13236010150' // Endgame Number
// })
// .then((message) => console.log(message.sid));


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
app.get('/home/:day', index.home);
app.get('/overview', index.overview);
app.get('/addMed', index.addMed);
app.get('/medInfo', index.medInfo);
app.get('/medInfo/:med', index.medInfo);
app.get('/profile', index.profile);
app.get('/day', index.day);
app.get('/data', index.data);
app.get('/404', index.error);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
