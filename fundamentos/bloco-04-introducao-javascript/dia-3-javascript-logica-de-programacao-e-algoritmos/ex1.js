//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
//! = 4 x 3 x 2 x 1 = 24
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

const valor = 10;
let fatorial = 1;

for (i = 1; i <= valor; i += 1) {
    fatorial = (fatorial * i);
    console.log(fatorial)
}