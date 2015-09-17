var appPath = "/";
var viewPath = "/views";

var express = require('express');
var app = express();
var path  = require('path');

app.set('port', (process.env.PORT || 5000));

//static
app.use('/static', express.static(__dirname + appPath + 'public'));
app.use(express.static('public'));

//set up underscore + html rendering
var cons = require('consolidate');
app.engine('html', cons.underscore);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, viewPath));

app.get('/', function(request, response) {
  	response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


