var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

 var books = [
   {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Leo Tolstoy',
      read: false
   },
   {
      title: 'Les Miserables',
      genre: 'Historical Fiction',
      author: 'Victor Hugo',
      read: false
   },
   {
      title: 'Animal Farm',
      genre: 'Satire',
      author: 'George Orwell',
      read: true
   },
   {
      title: 'Harry Potter',
      genre: 'Fantasy',
      author: 'J. K. Rowling',
      read: false
   },
   {
      title: 'Childhood',
      genre: 'Biography',
      author: 'Leo Tolstoy',
      read: true
   },
   {
      title: 'Life On The Mississippi',
      genre: 'History',
      author: 'Mark Twain',
      read: true
   },
   {
      title: 'The Time Machine',
      genre: 'Science Fiction',
      author: 'H. G. Wells',
      read: false
   },
   {
      title: 'The Mysterious Island',
      genre: 'Science Fiction',
      author: 'Jules Verne',
      read: false
   }
];


var router = function(nav) {

   adminRouter.route('/addBooks')
      .get(function(req, res) {
         var url = 'mongodb://localhost:27017/libraryApp';
         mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');

            collection.insertMany(books, function(err, results) {

               res.send(results);

               db.close();
            });
         });
      //   res.send('inserting books');
      });

   return adminRouter;
};

module.exports = router;
