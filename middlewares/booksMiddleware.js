const { booksModel } = require('../models');

const verifyContentEmpty = (req, res, next) => {
  const { title, isbn } = req.body;
  if (!title) {
    return res.status(400).send({ message: 'O campo "title" não pode estar vazio' });
  }
  if (!isbn) {
    return res.status(400).send({ message: 'O campo "isbn" não pode estar vazio' });
  }
  next();
};

const verifyBookExist = async (req, res, next) => {
  const { title, isbn } = req.body;
  const getByName = await booksModel.getByTitle(title);
  const getByIsbn = await booksModel.getByIsbn(isbn);
  if (getByName) {
    return res.status(400).send({ message: 'Livro com esse "title" já existe' });
  }
  if (getByIsbn) {
    return res.status(400).send({ message: 'Livro com esse "isbn" já existe' });
  }
  next();
};

module.exports = {
  verifyContentEmpty,
  verifyBookExist,
};
