// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");
//1
HREF_LINK.addEventListener('click', prevent)
function prevent(event){
  event.preventDefault()
}
//2
INPUT_CHECKBOX.addEventListener('click', prevent)
function prevent(event){
  event.preventDefault()
}
//3
INPUT_TEXT.addEventListener('keypress', prevent)
function prevent(event){
  if (event.key === 'a') {

  } else {event.preventDefault()}
}
