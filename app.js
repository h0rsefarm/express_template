var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var nav = [{
   Link: '/Books',
   Text: 'Books'
      }, {
   Link: '/Authors',
   Text: 'Authors'
}];
var bookRouter = require('./src/routes/bookRoutes')(nav); // router function is passed nav
var adminRouter = require('./src/routes/adminRoutes')(nav);

// create a public, 'first use' directory
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

// ROUTING
app.get('/', function(req, res) {
    res.render('index', {
      title: 'Hello from render',
      nav: nav
   });
});

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

// CREATE SERVER
app.listen(port, function(err) {
    if (!err) {
        console.log('listening on port ' + port);
    }
});
