const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id, email } = request.body;

    const ong = await connection('ongs')
      .where('id', id, )
      .select('name', 'email')
      .first();

      console.log (ong);
      
      if (!ong) {
        return response
        .status(400)
        .json({ error: 'No ONG found.' });
      }

      return response.json(ong);
  }
}