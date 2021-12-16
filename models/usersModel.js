const connection = require('./connection');

const add = async (name, email, password, role) => {
  try {
    const db = connection();
    db.collections('users').insertOne(name, email, password, role);
    return true;
  } catch(e) {
    return e;
  }
};

const findByEmail = async (email) => {
  try {
    const db = await connection();
    const user = await db.collection('users').findOne({ email });
    return user;
  } catch (e) {
    return e;
  }
};

module.exports = {
  add,
  findByEmail,
};
