import { listaMock, listaUrbanaMock } from '../__mocks_/tratamentos.mock'
import { descobrirNomes } from '../nomes'
import * as tratamentos from '../tratamentos'

describe('nomes suite', () => {
  it('deve retornar o último nome da primeira lista', () => {
    expect(descobrirNomes([
      listaMock, listaUrbanaMock
    ])).toBe("Jade")
  })

  it('deve chamar a funcao ultimoValor', () => {
    const ultimoValorMock = jest.spyOn(tratamentos, 'ultimoValor')

    descobrirNomes([
      listaMock, listaUrbanaMock
    ])
    expect(ultimoValorMock).toBeCalled()
  })
})