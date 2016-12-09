var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bookRouter = require('./src/routes/bookRoutes');


// create a public, 'first use' directory
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

// ROUTING
app.get('/', function(req, res) {
    res.render('index', {
      title: 'Hello from render',
      nav: [{
         Link: '/Books',
         Text: 'Books'
            }, {
         Link: '/Authors',
         Text: 'Authors'
      }]
   });
});

app.use('/Books', bookRouter);


// CREATE SERVER
app.listen(port, function(err) {
    if (!err) {
        console.log('listening on port ' + port);
    }
});
