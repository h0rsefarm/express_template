var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

// create a public, 'first use' directory
app.use(express.static('public'));
app.use(express.static('src/views'));

// ROUTING
app.get('/', function(req, res) {
    res.send('Hello world!');
});
app.get('/books', function(req, res) {
    res.send('Hello books!');
});


// CREATE SERVER
app.listen(port, function(err) {
    if (!err) {
        console.log('working');
        console.log('listening on port ' + port);
    }
});
