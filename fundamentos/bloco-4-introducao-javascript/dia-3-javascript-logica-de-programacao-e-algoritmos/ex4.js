// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// Number.isInteger(0);
let numero
let divisao;

for (let i = 1; i <= 50; i += 1) {
    for (let o = 1; o <= 50; o += 1){
        i%o == 0;
        if (Number.isInteger(divisao) == true) {
            console.log()
        }
    }
    if (divisao === 1) {
        console.log(i)
    }
}