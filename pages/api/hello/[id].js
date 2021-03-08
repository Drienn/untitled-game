// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handler } from '../../../utils';
import knex from '../../../db/knex';

const get = async (req, res) => {
  const { id } = req.query;
  console.log('got the id!', id);
  try {
    const [data] = await knex('player').select('*').where({ id });
    return res.status(200).json(data || {});
  } catch (e) {
    console.log('got the error!', e);
    return res.status(500).send({ message: `There was a server error - ${e.message}`, error: e });

  }
};

const post = async (req, res) => {
  const data = await knex('player').select('*');
  return res.status(200).json(data);
};

export default handler({
  get,
  post,
});
