$(document).ready(() => {
  let containerSplash = document.getElementById('splash-container');

  let openProyect = () => {
    window.location.href = 'views/view-1.html';    
  };

  function viewSplash() {
    setTimeout(function() {
      window.location.href = 'views/view-1.html';
    }, 4000);
  };

  containerSplash.addEventListener('click', openProyect);
  viewSplash();
});
