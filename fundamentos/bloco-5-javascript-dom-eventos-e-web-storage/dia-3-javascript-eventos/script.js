function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
//1
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDayList = document.querySelector('#days');

  for (let i = 0; i <dezDaysList.length; i += 1) {
    const dias = dezDaysList[i];
    const listaDias = document.createElement('li');
    listaDias.innerHTML = dias;
    // listaDias.classList.add('day');
    if (listaDias.innerHTML === '25') {
      listaDias.classList.add('day', 'holiday', 'friday');
      monthDayList.appendChild(listaDias);
    } else if (listaDias.innerHTML === '24' || listaDias.innerHTML === '31') {
      listaDias.classList.add('day', 'holiday');
      monthDayList.appendChild(listaDias);
    } else if (listaDias.innerHTML === '4' || listaDias.innerHTML === '11' || listaDias.innerHTML === '18') {
      listaDias.classList.add('day', 'friday');
      monthDayList.appendChild(listaDias);
    } else {
      listaDias.classList.add('day');
      monthDayList.appendChild(listaDias);
    }    
  };
};

createDaysOfTheMonth()
//2
function feriados(buttonName) {
  const divButton = document.querySelector('.buttons-container');
  const botao = document.createElement('button');
  botao.innerHTML = buttonName;
  botao.id = 'btn-holiday';
  divButton.appendChild(botao);
}
feriados("Feriados");

//3
let holidayButton = document.querySelector('#btn-holiday');
function feriadoClick () {  
  
  let holidays = document.querySelectorAll('.holiday');
  let backgroundColor = "rgb(238,238,238)";
  let newColor = 'white';

  for (let i = 0; i < holidays.length; i += 1) {
    if (holidays[i].style.backgroundColor === newColor) {
      holidays[i].style.backgroundColor === backgroundColor;
    } else {
      holidays[i].style.backgroundColor === newColor
    };
  };
};

holidayButton.addEventListener('click', feriadoClick);