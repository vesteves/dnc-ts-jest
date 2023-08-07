import { ultimoValor } from '../tratamentos'
import { listaMock } from '../__mocks_/tratamentos.mock'

describe('Unit - tratamentos suite', () => {
  it('deve retornar Jade', () => {
    expect(ultimoValor(listaMock)).toBe('Jade')
  })

  it('não deve retornar Jade', () => {
    expect(ultimoValor(listaMock)).not.toBe('Vitor')
  })
})