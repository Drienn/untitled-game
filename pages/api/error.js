// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { handler } from '../../utils';
// import knex from '../../db/knex';

const get = (req, res) => {
  res.status(200).json({ name: 'John Doe' });
};

export default handler({
  get,
});
