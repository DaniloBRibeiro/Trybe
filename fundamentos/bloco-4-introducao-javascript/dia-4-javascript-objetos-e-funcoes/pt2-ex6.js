// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

const n = 5;

function soma(n) {
  let somatorio = 0;
  for (let i = 0; i <= n; i += 1) {
    somatorio = somatorio + i;
  }
  return somatorio
}

console.log(soma(n))