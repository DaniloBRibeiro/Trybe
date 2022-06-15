//3
function cancel(event) {
  event.preventDefault()
};
window.onload = function () {
  const cancelButton = document.querySelector('#sub-botao');
  cancelButton.addEventListener('click', cancel);
  const clearButton = document.querySelector('#clear-botao');
  clearButton.addEventListener('click', clearFields);
};
//4
function clearFields () {
  const formulario = document.querySelectorAll('input');
  const textoArea = document.querySelector('textarea');
  for (let i = 0; i < formulario.length; i += 1) {
    const userInput = formulario[i];
    userInput.value = '';
    userInput.checked = false;
  }
  textoArea.value = '';
}
