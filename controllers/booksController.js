const { booksModel } = require('../models');

const getByCategorieName = async (req, res) => {
  const { categoryName } = req.params;
  try {
    const books = await booksModel.getByCategorieName(categoryName);
    return res.status(200).json(books);
  } catch (err) {
    return res.status(404).send({
      message: 'Livros não encontrados'
    });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await booksModel.getById(id);
    return res.status(200).json(book);
  } catch (err) {
    return res.status(404).send({
      message: 'Livro não encontrados'
    });
  }
};


const addBook = async (req, res) => {
  const {
    title,
    author,
    thumbnail_book,
    publishing_company,
    year_edition,
    edition,
    language,
    country,
    pages_count,
    isbn,
    category,
    price_book,
  } = req.body;
  try {
    await booksModel.addBook(
      title,
      author,
      thumbnail_book,
      publishing_company,
      year_edition,
      edition,
      language,
      country,
      pages_count,
      isbn,
      category,
      price_book,
    );
    return res.status(200).send({
      message: 'Livro cadastrado com sucesso',
    });
  } catch (err) {
    return res.status(422).send({
      message: 'Cadastro de livro não efetuado',
    });
  }
};

const updateBook = async (req, res) => {
  const {
    title,
    author,
    thumbnail_book,
    publishing_company,
    year_edition,
    edition,
    language,
    country,
    pages_count,
    isbn,
    category,
    price_book,
  } = req.body;
  const bookId = req.params.id;
  try {
    const book = await booksModel.updateBook(
      bookId,
      title,
      author,
      thumbnail_book,
      publishing_company,
      year_edition,
      edition,
      language,
      country,
      pages_count,
      isbn,
      category,
      price_book,
    );
    return res.status(200).json(book);
  } catch(e) {
    return e;
  }
};

module.exports = {
  getByCategorieName,
  getById,
  addBook,
  updateBook,
};
