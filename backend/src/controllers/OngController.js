const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const genarateUniqueId = require('../utils/generateUniqueId');

const connection = require('../database/connection');

module.exports = {
  /**
   *  Create Ongs
   */
  async create(request, response) {
    const { name, email, password, whatsapp, city, uf } = request.body;

    const id = genarateUniqueId();

    if (password) {
      password_hash = await bcrypt.hash(password, 8);
    }

    const ongExist = await connection('ongs')
      .where('email', email)
      .first();

    if (ongExist) {
      return response
        .status(400)
        .json({ error: 'ONG already exist.' });
    }

    const ongData = await connection('ongs').insert({
      id,
      name,
      email,
      password_hash,
      whatsapp,
      city,
      uf,
    })

    return response.json({ id });
  },

  /**
   *  List Ongs
   */
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('ongs').count();

    const ongs = await connection('ongs')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'ongs.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(ongs);
  }
}