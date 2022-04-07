// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 91;

if (nota > 100 || nota < 0) {
    console.log('Nota invalida')
}

else if (nota >= 90) {
    nota = 'A';
    console.log(nota) 
}

else if (nota >=80) {
    nota = 'B';
    console.log(nota)
}

else if (nota >= 70) {
    nota = 'C';
    console.log(nota);
}

else if (nota >= 60) {
    nota = 'D';
    console.log(nota);
}

else if (nota >= 50) {
    nota = 'E';
    console.log(nota);
}

else {
    nota = 'F'
    console.log(nota);
}