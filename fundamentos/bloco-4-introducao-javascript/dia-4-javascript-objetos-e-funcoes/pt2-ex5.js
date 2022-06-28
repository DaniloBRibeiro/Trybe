// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

const teste = [2, 3, 2, 5, 8, 2, 3];

function numeroRepetido (teste) {
  let numRepetido = 0;
  let quantasVezesRepete = 0;
  let indexNumRepetido = 0;
  for (let index in teste) {
    let numVerificado = teste[index];
    for (let index2 in teste) {
      if (numVerificado === teste[index2]) {
        quantasVezesRepete += 1;
      }
    }
    if (quantasVezesRepete > numRepetido) {
      numRepetido = quantasVezesRepete;
      indexNumRepetido = index;
    }
    quantasVezesRepete = 0;
  }
  return teste[indexNumRepetido]
}

console.log(numeroRepetido(teste));
