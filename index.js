const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { categoriesBookController, booksController, usersController } = require('./controllers');
const { booksMiddleware } = require('./middlewares');

app.get(
  '/categories',
  categoriesBookController.getAll,
);

app.get(
  '/books/:id',
  booksController.getById,
);

app.get(
  '/books-category/:categoryName',
  booksController.getByCategorieName,
);

app.post(
  '/books-register',
  booksMiddleware.verifyContentEmpty,
  booksMiddleware.verifyBookExist,
  booksController.addBook,
);

app.put(
  '/books-update/:id',
  booksMiddleware.verifyContentEmpty,
  booksController.updateBook,
);

app.listen(8080, () => console.log('Servidor rodando na porta 8080'));
