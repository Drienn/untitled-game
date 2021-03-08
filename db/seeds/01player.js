exports.seed = (knex) => knex('player').del().then(() => knex('player').insert([
  {
    email: 'emitdutcher@gmail.com',
    name: 'Emit',
  },
]));
