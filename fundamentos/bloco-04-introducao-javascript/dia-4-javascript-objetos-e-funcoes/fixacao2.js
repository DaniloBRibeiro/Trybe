// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
// Copiar
// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };
// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
// Copiar
// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for (let index in names) {
  console.log('Olá ' + names[index])
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (let index2 in car) {
  console.log(index2 + ' ' + car[index2])
}
