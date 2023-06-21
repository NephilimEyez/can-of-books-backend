'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Books = require('./models/books');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));

mongoose.connect(process.env.DB_URL);

app.get('/books', getBooks);

app.post('/books', addBook);

app.delete('/books/:bookID', deleteBook);


async function getBooks(request, response, next) {
  try {
    let allBooks = await Books.find({});
    response.status(200).send(allBooks);
  } catch (error) {
    next(error)
  }
}

async function addBook(request, response, next) {
  try {
    let newBook = await Books.create(request.body);
    response.status(200).send(newBook);
  } catch (error) {
    next(error);
  }
}

async function deleteBook(request, response, next) {
  try {
    let id = request.params.bookID;
    await Books.findByIdAndDelete(id);
    response.status(200).send('Book was deleted from the db!');
  } catch (error) {
    next(error);
  }
}

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});
