const connection = require('./connection');

const getById = async (id) => {
  try {
    const db = await connection();
    const category = await db.collection('categories').findOne({ _id: new ObjectId(id) });
    return category;
  } catch (err) {
    return null;
  }
};

const getAll = async () => {
  try {
    const db = await connection();
    const categories = await db.collection('categories').find().toArray();
    return categories;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAll,
  getById,
};
