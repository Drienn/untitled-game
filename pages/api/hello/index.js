// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handler } from '../../../utils';
import knex from '../../../db/knex';

const get = async (req, res) => {
  const [data] = await knex('player').select('*');
  return res.status(200).json(data);
};

const post = async (req, res) => {
  console.log('got the id?', req.params);
  const data = await knex('player').select('*');
  return res.status(200).json(data);
};

export default handler({
  get,
  post,
});
