$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height >= 56 ) {
    $('#tallenough').show();
  } else {
    $('#nottallenough').show();
  }
});
