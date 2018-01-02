// funciones reutilizadas en más de una vista 

// activar el button next a traves del atributo 'DISABLED'
function activateButton(button) {
  button.attr('disabled', false);
}

// funcion paea desactivar el boton
function desactiveButton(button) {
  button.attr('disabled', 'disabled');
} 

// función para generar números aleatoriamente 
function generateRandomNumber() {
  var max = 10;
  var min = 0;
  return Math.floor(Math.random() * (max - min)) + min;
}

// función para generar código de validación 

var randomNumber1;
var randomNumber2;
var randomNumber3;

function generateCode() { 
  randomNumber1 = generateRandomNumber();
  randomNumber2 = generateRandomNumber();
  randomNumber3 = generateRandomNumber();
  insertCodeModal(randomNumber1, randomNumber2, randomNumber3);
  localStorage.code1 = randomNumber1;
  localStorage.code2 = randomNumber2;
  localStorage.code3 = randomNumber3;  
}

// función para insertar el código en el Html
function insertCodeModal(randomNumber1, randomNumber2, randomNumber3) {
  $('.modal-body span').text(randomNumber1 + '' + randomNumber2 + '' + randomNumber3);
}