const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', ()=> {

  // Executa a função antes de todos o processo de testes
  beforeEach( async () => {
    await connection.migrate.rollback(); // Limpa o banco para o próximo teste
    await connection.migrate.latest(); // Estrutura o banco
  });

  // Finaliza a conexão com o banco de dados
  afterAll(async() => {
    await connection.destroy(); // Finaliza a conexão com o banco de dados
  });


  // Executa o teste de inserção de dados no banco de dados
  it('should be able to create a new ONG', async ()=> {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD",
        email: "contato@ong.com",
        whatsapp: "47000000000",
        password: "12345678",
        city: "Rio do Sul",
        uf: "SC"
      });

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  });
});