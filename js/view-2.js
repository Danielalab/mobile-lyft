$(document).ready(verifyPhone);

function verifyPhone() {
  // seleccionando elementos del DOM
  var $userPhone = $('#user-phone');
  var $buttonNext = $('#btn-next');
  var $buttonModalClose = $('#btn-close');
  var regExpPhone = /^\d+$/;

  $userPhone.on('input', function() {
    console.log($(this).val());
    if (regExpPhone.test($(this).val()) && $(this).val().length === 9) {
      sessionStorage.number = $(this).val();
      activateButton($buttonNext);
    } else {
      desactiveButton($buttonNext);
    }
  });

  $buttonNext.click(function(event) {
    event.preventDefault();
    generateCode();
  });

  $buttonModalClose.click(function() {
    window.location.href = 'view-3.html';
  });
}