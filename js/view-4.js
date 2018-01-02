$(document).ready(verifyForm);

function verifyForm() {
  // seleccionando elementos del DOM
  var $firstNameInput = $('#first-name');
  var $lastNameInput = $('#last-name');
  var $emailInput = $('#email');
  var $checkedInput = $('input[type="checkbox"]');
  var $btnNext = $('#btn-next');

  // expresion regular que verifica solo texto
  var regExpName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/ ;

  // variables centinelas
  var validateFirstName = false;
  var validateLastName = false;  
  var validateEmail = false;
  var validateCheckBox = false;

  $firstNameInput.on('input', verifyFirstName);
  $lastNameInput.on('input', verifyLastName);
  $emailInput.on('input', verifyEmail);
  $checkedInput.click(verifyCheckBox);
  $btnNext.click(nextView);

  function verifyFirstName() {
    if ($(this).val().length >= 3 && regExpName.test($(this).val())) {
      console.log('firstname valid');
      validateFirstName = true;
      allInputsValid();
    } else {
      validateLastName = false;
      desactiveButton($btnNext);
    }
  }

  function verifyLastName() {
    if ($(this).val().length >= 3 && regExpName.test($(this).val())) {
      console.log('lastname valid');      
      validateLastName = true;
      allInputsValid();      
    } else {
      validateLastName = false;
      desactiveButton($btnNext);
    }
  }

  function verifyEmail() {
    var regExpEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (regExpEmail.test($(this).val())) {
      validateEmail = true;
      allInputsValid();      
    } else {
      validateEmail = false;
      desactiveButton($btnNext);      
    }
  }

  function verifyCheckBox(event) {
    if (event.target.checked) {
      validateCheckBox = true;
      allInputsValid();      
    } else {
      validateCheckBox = false;
      desactiveButton($btnNext);
    }
  }

  function allInputsValid() {
    if (validateFirstName && validateLastName && validateEmail && validateCheckBox) {
      activateButton($btnNext);
    }
  }

  function nextView(event) {
    event.preventDefault();
    window.location.href = 'view-5.html';
  }
}