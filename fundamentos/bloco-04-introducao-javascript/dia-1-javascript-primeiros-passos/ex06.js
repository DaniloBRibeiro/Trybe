// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

// const rei = ;
// const rainha = ;
// const torre = ;
// const bispo = ;
// const cavalo = ;
// const peao = ;

let peca = 'RAINHA';

switch (peca.toLowerCase()) {
    case "rei":
        console.log('Move para qualquer casa adjacente')
        break;

    case "rainha":
        console.log('Move qualquer número de casas em linha reta - verticalmente, horizontamente e diagonalmente')
        break;

    case "torre":
        console.log('Move em linha reta horizontalmente e verticalmente até o final do tabuleiro ou ser bloqueado por outra peça.')
        break;

    case "bispo":
        console.log('Move em linha reta diagonalmente, até o final do tabuleiro ou ser bloqueado por outra peça.')
        break;

    case "cavalo":
        console.log('Move no formato L. Pode pular outras peças.')
        break;

    case "peao":
        console.log('Move apenas para frente(nunca para trás), uma casa por vez. No seu primeiro movimento, pode andar 2 casas pra frente. Só pode capturar peças adversárias movendo-se diagonalmente uma casa')
        break;

    default:
        console.log('peça invalida')
}