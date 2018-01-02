$(document).ready(verifyCode);

function verifyCode() {
  // seleccionando elementos del DOM
  var $firstInput = $('#first-input');
  var $secondtInput = $('#second-input');
  var $thirdInput = $('#third-input');
  var $btnNext = $('#btn-next');
  var $btnResendCode = $('#btn-resend-code');
  
  // variables centinelas
  var validateFirstInput = false;
  var validateSecondInput = false;
  var validateThirdInput = false;  

  // función para generar un nuevo código
  $btnResendCode.click(function(event) { 
    event.preventDefault(); 
    generateCode();
  });

  $firstInput.on('input', function() {
    if ($(this).val() === localStorage.code1) {    
      validateFirstInput = true;
      allInputsValid();
    } else {
      validateFirstInput = false;
      desactiveButton($btnNext);      
    }
  });

  $secondtInput.on('input', function() {
    if ($(this).val() === localStorage.code2) {
      validateSecondInput = true;
      allInputsValid();      
    } else {
      validateSecondInput = false;
      desactiveButton($btnNext);                  
    }
  });

  $thirdInput.on('input', function() {
    if ($(this).val() === localStorage.code3) {
      validateThirdInput = true;
      allInputsValid();      
    } else {
      validateThirdInput = false;
      desactiveButton($btnNext);                              
    }
  });

  function allInputsValid() {
    if (validateFirstInput && validateSecondInput && validateThirdInput) {
      activateButton($btnNext);
    }
  }

  $btnNext.click(function(event) {
    event.preventDefault();
    window.location.href = 'view-4.html';
  });
}