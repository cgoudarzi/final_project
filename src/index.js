require('dotenv').config({path: '../../.env' });

var express    = require('express'),
    app        = express(),
    exphbs     = require('express-handlebars'),
    hbs        = require('hbs'),
    fs         = require('fs'),
    bodyParser = require('body-parser')


app.engine('hbs', exphbs({
  defaultLayout:  'main',
  partialsDir:    __dirname + '/views/partials',
  layoutsDir:     __dirname + '/views/layouts',
  extname:        '.hbs'
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

require('./models/db');
require('./models/user');

app.use('/', require('./controllers/home'));

//Start server listening on port 3000
var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
