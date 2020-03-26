const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
  /**
   *  Create Ongs
   */
  async create(request, response) {
    const { name, email,  whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return response.json({ id });
  },

  /**
   *  List Ongs
   */
  async index (request, response) {
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