//|| to be used for 'or' in conditions
//create variables

//set document ready function at the top of
//the page and wrap around entire JS
$(document).ready(function() {
console.log('Ready!');

//call function
$('#submit-btn').click(swap);

//enter function to change background
//swap will take the variable cityInput and get the value of the city-type input
function swap () {
  var cityInput = $('#city-type').val();
  //use val or attr?

//use if/else conditions to assign event to differnt types on input

//add event.preventDefault(); to keep the function from reverting back to removeClass
//too quickly
    if (cityInput === 'New York' || cityInput === 'NYC' || cityInput === 'New York City') {
      remove();
      $('body').addClass('nyc');
      event.preventDefault();
    }
    else if (cityInput === 'San Francisco' || cityInput === 'SF' || cityInput === 'Bay Area') {
      remove();
      $('body').addClass('sf');
      event.preventDefault();
    }
    else if (cityInput === 'Los Angeles' || cityInput === 'LA' || cityInput === "LAX") {
      remove();
      $('body').addClass('la');
      event.preventDefault();
    }
    else if (cityInput === 'Austin' || cityInput === 'ATX') {
      remove();
      $('body').addClass('austin');
      event.preventDefault();
    }
    else if (cityInput === 'Sydney' || cityInput === 'SYD') {
      remove();
      $('body').addClass('sydney');
      event.preventDefault();
    }
  }
});
//add function to remove background
function remove (){
  $('body').removeClass();
}
//need to figure out how to utilize String.toUpperCase() or String.toLowerCase() to handle

