/* Description: app.js takes care of necesary module dependencies, and sets
 * up the basic environments, ports and routes necessary for the application
 * to function correctly.
 */

/************************************************************************/

const express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var index = require('./routes/index');
const app = express();

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
app.get('/404', index.error);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
