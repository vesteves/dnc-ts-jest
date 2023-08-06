import { sub } from '../sub'

describe('sub test suite', () => {
    it('deverá subtrair 3 e 2 e retornar 1', () => {
        expect(sub(3, 2)).toEqual(1)
    })

    it('deverá subtrair -3 e 2 e retornar 1', () => {
        expect(sub(-3, 2)).not.toEqual(1)
        expect(sub(-3, 2)).toEqual(-5)
    })
})