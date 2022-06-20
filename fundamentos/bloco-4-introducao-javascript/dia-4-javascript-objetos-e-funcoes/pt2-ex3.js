// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

const teste = [2, 4, 6, 7, 10, 0, -3];

function menorValor(numeros) {
  let menor = 0;
  for (let i in numeros) {
    if (numeros[0] > numeros[i]) {
      menor = i;
    }
  }
  return menor;
}

console.log(menorValor(teste));