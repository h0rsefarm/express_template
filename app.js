var express = require('express'); // main require
var app = express(); // instance of our app
var bodyParser = require('body-parser'); // handle json and urencoded body for req or res
var cookieParser = require('cookie-parser'); // req for auth
var passport = require('passport'); // req for auth
var session = require('express-session'); // req for auth

var port = process.env.PORT || 5000;
var nav = [{
   Link: '/Books',
   Text: 'Books'
      }, {
   Link: '/Authors',
   Text: 'Authors'
}];

// create routers for app
var bookRouter = require('./src/routes/bookRoutes')(nav); // router function is passed nav
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);


// create a public, 'first use' directory
app.use(express.static('public'));
app.use(bodyParser.json()); // add bodyparser to app
app.use(bodyParser.urlencoded()); // add bodyparser to app
app.use(cookieParser());
app.use(session({secret: 'library'})); // must pass a secret
require('./src/config/passport')(app);

// VIEW PARAMS
app.set('views', './src/views'); // list dir views are contained
app.set('view engine', 'ejs'); // set view engine to look for .ejs

// ROUTING
// initial route for main page
app.get('/', function(req, res) {
    res.render('index', {        // search for 'index' within views
      title: 'Hello from render', // pass some vars
      nav: nav
   });
});

// assign routers to routes
app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

// CREATE SERVER
app.listen(port, function(err) {
    if (!err) {
        console.log('listening on port ' + port);
    }
});
