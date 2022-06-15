// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

const teste = [2, 3, 6, 7, 10, 1];

function maiorValor(numeros) {
  let maior = 0;
  for (let i in numeros) {
    if (numeros[maior] < numeros[i]) {
      maior = i;
    }
  }
  return maior;
}

console.log(maiorValor(teste));