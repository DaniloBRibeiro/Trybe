//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const x = 5;
const y = 20;
const z = 15;

if (x > y && x > z) {
    console.log(x)
}
else if (y > z && y > x) {
    console.log(y)
}
else {
    console.log(z)
}