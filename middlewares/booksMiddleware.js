const { booksModel } = require('../models');

const verifyContentEmpty = (req, res, next) => {
  const { body } = req;
  const keysBody = Object.keys(body);
  for (let i = 0; i < keysBody.length; i +=1 ) {
    if (!body[keysBody[i]]) {
      return res.status(400).send({ message: `O campo ${keysBody[i]} não pode estar vazio` });
    };
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
