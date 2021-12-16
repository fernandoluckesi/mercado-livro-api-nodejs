const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getById = async (id) => {
  try {
    const db = await connection();
    const book = await db.collection('books').findOne({ _id: new ObjectId(id) });
    return book;
  } catch (err) {
    return err;
  }
};

const getByCategorieName = async (categoryName) => {
  try {
    const db = await connection();
    const books = await db.collection('books').find({ 'category': categoryName }).toArray();
    return books;
  } catch (err) {
    return err;
  }
};

const getByTitle = async (title) => {
  try {
    const db = await connection();
    const book = await db.collection('books').findOne({ 'title': title });
    return book;
  } catch (err) {
    return err
  }
};

const getByIsbn = async (isbn) => {
  try {
    const db = await connection();
    const book = await db.collection('books').findOne({ 'isbn': isbn });
    return book;
  } catch (err) {
    return err
  }
};

const addBook = async (
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
) => {
  try {
    const db = await connection();
    await db.collection('books').insertOne({
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
    });
    return true;
  } catch (err) {
    return err;
  }
};

const updateBook = async (
  id,
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
) => {
  try {
    const db = await connection();
    await db.collection('books').updateOne(
      { _id: ObjectId(id) }, {
        $set: {
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
        }
    },
    );
    const book = await getById(id);
    return book;
  } catch (e) {
    return null;
  }
};

module.exports = {
  getById,
  getByCategorieName,
  addBook,
  getByTitle,
  getByIsbn,
  updateBook,
};
