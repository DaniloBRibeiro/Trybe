
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const fatorial = (num) => {
  let numero = 1;
  for (let i = 1; i <= num; i += 1) {
    numero = i * numero
  }
  return numero
}

console.log(fatorial(0))

const fatorialDois = numeroDois => numeroDois === 0 ? 1 : numeroDois * fatorialDois(numeroDois - 1);

console.log(fatorialDois(6));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const maiorPalavra = text => {
  let textArray = text.split(' ');
  let result = '';
  let wordLength = 0;
  for (const word of textArray) {
    if (word.length > wordLength) {
      wordLength = word.length
      result = word
    }
  }
  return result
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'))

const maiorPalavraDois = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(maiorPalavraDois('Antônio foi no banheiro e não sabemos o que aconteceu'))
