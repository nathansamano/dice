// select which dice to roll
function chooseOne(die) {
  var which = Math.floor(Math.random() * die) + 1;

  // Clear out the div, and then fill it with fresh
  // This is the wonderful, invisible work of jQuery
  $('#output').empty();
  $('#output').append('<pre>' + which + '</pre>');
}
