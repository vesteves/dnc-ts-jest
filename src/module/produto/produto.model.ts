import knex from '../../service/knex';

export const getAll = async () => {
  return knex('produtos').select();
};

export const store = async (params: any) => {
  return knex('produtos').insert(params);
};

