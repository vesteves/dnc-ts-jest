import { sum } from '../sum'

describe('libs suite', () => {
  describe('sum suite', () => {
    it('should return true', () => {
      expect(true).toBe(true)
    })

    it('deverá retornar 4', () => {
      expect(sum(2, 2)).toEqual(4)
    })

    it('deverá escrever Vitor', () => {
      expect('V' + 'i' + 't' + 'o' + 'r').toEqual('Vitor')
    })

    it('não deverá escrever Carol', () => {
      expect('V' + 'i' + 't' + 'o' + 'r').not.toEqual('Carol')
    })
  })
})