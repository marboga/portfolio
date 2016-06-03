console.log('server.js')

var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
// var ngParallax = require('ng-parallax');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app); //KEEPLAST

app.listen(8000, function(){
	console.log('listening for you on 8k')
})
