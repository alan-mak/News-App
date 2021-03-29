$(document).ready(() => {
  $('.fas').click(() => {
    $('html, body').animate({scrollTop: 0}, 1000);
    return false;
  })
})