// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
// Crie uma função para mostrar o tamanho de um objeto.
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
//1
const addNight = (object, key, value) => {
  object[key] = value;
};

addNight(lesson2, 'turno', 'noite')
console.log(lesson2)

//2
const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson1));

//3
const objSize = (obj) => Object.keys(obj).length
console.log(objSize(lesson3))

//4
const valueObj = (obj) => Object.values(obj)
console.log(valueObj(lesson1))

//5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })
console.log(allLessons)

//6
const totalStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
}
console.log(totalStudents(allLessons))

//7
const getValueByNumber = (obj, num) => Object.values(obj)[num];
console.log(getValueByNumber(lesson1, 0))

//8
const verifyPair = (obj, key, value) => {
  const array = Object.entries(obj);
  let compar = false;
  for (index in array) {
    if (array[index][0] === key && array[index][1] === value) {
      compar = true;
    }
  }
  return compar
}
console.log(verifyPair(lesson3, 'turno', 'noite'));

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

//bonus
//1
const mathStudents = (obj) => {
  const array = Object.keys(obj)
  let total = 0;
  for (index in array) {
    if (obj[array[index]].materia === 'Matemática') {
      total += obj[array[index]].numeroEstudantes
    }
  }
  return total;
}
console.log(mathStudents(allLessons))

//2
const getInfo = (obj, name) => {
  const classroom = [];
  let students = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      students += array[index].numeroEstudantes
      classroom.push(array[index].materia);
    }
  }
  return { aulas: classroom, estudantes: students };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'))
