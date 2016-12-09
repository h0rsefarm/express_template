var express = require('express');
var bookRouter = express.Router();

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

bookRouter.route('/')
   .get(function(req, res) {
      res.render('bookListView', {
        title: 'Books',
        nav: [{
           Link: '/Books',
           Text: 'Books'
              }, {
           Link: '/Authors',
           Text: 'Authors'
        }],
        books: books
     });
   });

bookRouter.route('/:id')
   .get(function(req, res) {
      var id = req.params.id;
      res.render('bookView', {
        title: 'Books',
        nav: [{
           Link: '/Books',
           Text: 'Books'
              }, {
           Link: '/Authors',
           Text: 'Authors'
        }],
        book: books[id]
     });
   });

module.exports = bookRouter;
