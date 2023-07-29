const knex = require('../../service/knex');

const getAll = async () => {
  return knex('produtos').select();
};

const store = async (params) => {
  return knex('produtos').insert(params);
};

module.exports = {
  getAll,
  store,
};
