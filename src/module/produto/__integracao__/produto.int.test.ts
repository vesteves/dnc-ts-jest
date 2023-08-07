import * as request from 'supertest';

describe('Int - Produto Suite', () => {
  it('##GET /produto', async () => {
    const response = await request('http://localhost:8080')
      .get('/produto')

    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.data).toHaveLength(25)
  })

  it('##POST /produto', async () => {
    const response = await request('http://localhost:8080')
      .post('/produto')
      .send({
        nome: "Produto Teste 7",
        preco: 1000
      })

    expect(response.status).toBe(201)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.data).toHaveLength(1)
  })

  it('##POST /produto valores errados', async () => {
    const response = await request('http://localhost:8080')
      .post('/produto')
      .send({
        name: "Produto Teste 7",
        price: 1000
      })

    expect(response.status).toBe(400)
    expect(response.headers['content-type']).toMatch(/json/)
    expect(response.body.msg).toEqual('Nome e Preço são obrigatórios')
  })
})