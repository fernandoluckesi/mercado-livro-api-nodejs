const { categoriesBookModel } = require('../models');

const getAll = async (_req, res) => {
  try {
    const categories = await categoriesBookModel.getAll();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(400).send({
      err: {
        message: 'categorias não encontradas',
      },
    });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await categoriesBookModel.getById(id);
    return res.status(200).json(category);
  } catch (err) {
    return res.status(404).send({
      message: 'Categoria não encontrada'
    });
  }
};

module.exports = {  
  getAll,
  getById
};
