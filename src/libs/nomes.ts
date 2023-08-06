import { ultimoValor } from './tratamentos'

export const descobrirNomes = (listas: string[][]) => {
  for (const lista of listas) {
    return ultimoValor(lista)
  }
}