const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { email, password } = request.body;

    const ong = await connection('ongs')
      .where('email', email)
      .select('id', 'name', 'email', 'whatsapp', 'password_hash')
      .first();

    // Verifique se a ONG existe  
    if (!ong) {
          return response
            .status(400)
            .json({ error: 'No ONG found.' });
        }

    // Verifique a senha
    if (password) {
      passwordCheck = await bcrypt.compare(password, ong.password_hash);
    }
    if (!passwordCheck) {
      return response
            .status(400)
            .json({ error: 'Incorrect password.' });
    }

    return response.json(ong);
  }
}