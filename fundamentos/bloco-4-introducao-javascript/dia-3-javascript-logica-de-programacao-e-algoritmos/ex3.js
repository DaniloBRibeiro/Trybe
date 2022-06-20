// 3- Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

for (let i = 0; i < array.length; i += 1) {
    if (maior.length < array[i].length) {
        maior = array[i]
    }
}
console.log(maior)

for (let ii = 0; ii < array.length; ii += 1) {
    if (menor.length > array[ii].length) {
        menor = array[ii]
    }
}
console.log(menor)