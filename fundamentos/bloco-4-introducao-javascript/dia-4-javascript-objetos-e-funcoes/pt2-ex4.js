// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

const teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(teste) {
  let maiorpalavra = teste[0];
  for (let i in teste) {
    if (teste[i].length > maiorpalavra.length)
    maiorpalavra = teste[i];
  }
  return maiorpalavra
}

console.log(maiorNome(teste))