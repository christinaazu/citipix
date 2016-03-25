//take users input & update background

//create function that holds conditional
//statements. || to be used
//create variables

//set document ready function at the top of
//the page and wrap around entire JS
$(document).ready(function() {
console.log('Ready!');

//call function
$('#submit-btn').click(swap);

//enter function to change background
function swap () {
var a = $("#city-type").val();

if (a == 'New York') {
  remove();
  $('body').addClass('.nyc');
}
};

//add function to remove background
function remove (){
  $('body').removeClass();
}
});

