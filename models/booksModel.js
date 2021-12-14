const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getById = async (id) => {
  try {
    const db = await connection();
    const book = await db.collection('books').findOne({ _id: new ObjectId(id) });
    return book;
  } catch (err) {
    return null;
  }
};

const getByCategorieName = async (categoryName) => {
  try {
    const db = await connection();
    const books = await db.collection('books').find({ 'category': categoryName }).toArray();
    return books;
  } catch (err) {
    return null;
  }
};

const getByTitle = async (title) => {
  try {
    const db = await connection();
    const book = await db.collection('books').findOne({ 'title': title });
    return book;
  } catch (err) {
    return null
  }
};

const getByIsbn = async (isbn) => {
  try {
    const db = await connection();
    const book = await db.collection('books').findOne({ 'isbn': isbn });
    return book;
  } catch (err) {
    return null
  }
};

const addBook = async (
  title,
  author,
  publishing_company,
  year_edition,
  edition,
  language,
  country,
  pages_count,
  isbn,
  category,
) => {
  try {
    const db = await connection();
    const newBook = await db.collection('books').insertOne({
      title,
      author,
      publishing_company,
      year_edition,
      edition,
      language,
      country,
      pages_count,
      isbn,
      category,
    });
    return true;
  } catch (err) {
    console.log('não conectou');
    console.log(err)
    return null;
  }
}

module.exports = {
  getById,
  getByCategorieName,
  addBook,
  getByTitle,
  getByIsbn,
};
