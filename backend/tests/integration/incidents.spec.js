const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('INCIDENTS', ()=> {

  // Executa a função antes de todos o processo de testes
  beforeEach( async () => {
   await connection.migrate.rollback(); // Limpa o banco para o próximo teste
   await connection.migrate.latest(); // Estrutura o banco
  });

  
  afterAll(async() => {
    await connection.destroy(); // Finaliza a conexão com o banco de dados
  });


  // Executa o teste de inserção de dados no banco de dados
  it('should be able to create a new INCIDENT', async ()=> {
    const response = await request(app)
      .post('/incidents')
      .set('Authorization', '85f2de2a')
      .send({
        title: "Cavalo atropelado por caminhão e fica com pata quebrada",
        description: "Para este caso é necessário, uma intervenção cirúgica e imobilização.",
        value: 520
      });

      expect(response.body).toHaveProperty('id');
  });
});