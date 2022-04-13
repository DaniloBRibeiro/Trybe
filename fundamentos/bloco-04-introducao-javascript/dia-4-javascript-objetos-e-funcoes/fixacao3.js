//1 Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 9;
const b = 3;

function adicao(a, b) {
  return a + b
}
console.log(adicao(a, b))

function sub(a, b) {
  return a - b
}
console.log(sub(a, b))

function mult(a, b) {
  return a * b
}
console.log(mult(a, b))

function div(a, b) {
  return a / b
}
console.log(div(a, b))

function mod(a, b) {
  return a % b
}
console.log(mod(a, b))

//2 Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

function maiorNum(a, b) {
  if (a > b) {
    return a
  }
  else if(a < b) {
    return b
  }
  else {
    return 'São números iguais'
  }
}
console.log(maiorNum(a, b))

//3 Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const c = 10;

function maiorNumTres(a, b, c) {
  if (a > b && a > c) {
    return a
  }
  else if(b > a && b > c) {
    return b
  }
  else if(c > a && c > b) {
    return c
  }
  else {
    return 'São números iguais'
  }
}
console.log(maiorNumTres(a, b, c))

//4 Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function valorPN(a, b, c) {
  if (a > 0 ) {
    return 'positive'
  }
  else if (a < 0) {
    return 'negative'
  }
  else {
    return 'zero'
  }
}
console.log(valorPN(a, b, c))

//5 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const x = 90;
const y = 45;
const z = 45;

function angulos(x, y, z) {
  if (x + y + z == 180) {
    return 'true'
  }
  else if (x <= 0 || y <= 0 ||z <= 0) {
    return 'erro'
  }
  else {
    return 'false'
  }
}
console.log(angulos(x, y, z))