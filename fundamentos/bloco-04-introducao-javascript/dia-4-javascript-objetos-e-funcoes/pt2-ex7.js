// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

// const word = 'trybe';
// const ending = 'be';

function verificaFimPalavra(word, ending) {
  if (ending > word) {
    return 'Erro'
  }
  else {
    wordIn = word.split('').reverse().join('');
    endingIn = ending.split('').reverse().join('');
    for (let i = 0; i < endingIn.length; i += 1) {
      if (endingIn[i] !== wordIn[i]) {
        result = false;
        break
      }
      else {
        result = true;
      }
    }
  }
  return result;
}

console.log(verificaFimPalavra('trybe', 'be'))
console.log(verificaFimPalavra('joaofernando', 'fernan'))