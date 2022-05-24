// 1 - Crie uma função que retorne a string 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores.

const wakeUp = () => 'Acordando!!';

const coffe = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  console.log(callback())
};

doingThings(wakeUp);
doingThings(coffe);
doingThings(sleep);

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'),
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'),
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const nameEmployee = (nomeCompleto) => {
  const nameEmail = nomeCompleto.toLowerCase().split(' ').join('_');
  console.log(nameEmail + '@trybe.com');
  return { nomeCompleto, email: `${nameEmail}@trybe.com` };
};

console.log(newEmployees(nameEmployee));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const lottery = (myNumber, callback) => {
  const number = Math.floor((Math.random()* 5)+ 1);
  
  return callback(myNumber, number) ? 'Lucky' : 'Try again';
};

const checkNumbers = (myNumber, number) => myNumber === number;

console.log(lottery(2, checkNumbers));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correct = (correctAnwsers, studentAnwsers, callback) => {
  let total = 0;
  for (let index = 0; index < correctAnwsers.length; index += 1) {
    const count = callback(correctAnwsers[index], studentAnwsers[index]);
    total += count;
  }
  return `Total: ${total} pontos`;
}

const countCheck = (correctAnwser, studentAnwser) => {
  if (correctAnwser === studentAnwser) {
    return 1;
  } if (studentAnwser === 'N.A') {
    return 0;
  }
  return 0.5;
};

console.log(correct(RIGHT_ANSWERS, STUDENT_ANSWERS, countCheck))