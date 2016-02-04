$(document).ready(function(){
  // alert("I am working");


  //Player 1 will always be X and player 2 always O
  //place buttons for each player

    /* TASK 1: click in any box in board and changes square to X */


    /* TASK 1: click in any box in board and changes square to X */

  //Depending on which player clicks on the squre that square will be assigned either X or an O

//turn each box into a button. A counter will be applied that disables the button once the counter increments to 1

//FIELD 2: add a counter that will disable the box once it reaches 1
var counter = 1;

function addMark(field) {
  if(counter % 2 === 0) {

    counter++;
  }
  else if(counter % 2 === 1) {
    $(field).html(<img src="/Users/learn/Desktop/tictactoe_kim:daniel/letterX.png"/>);
    counter++;
  }
  console.log(counter);
};


$("#field1Button").click(function(){
  // $("#field2").addClass("X");
  addMark("#span1");
});

$("#field2Button").click(function(){
  // $("#field2").addClass("X");
  addMark("#field2");
});

$("#field3Button").click(function(){
  // $("#field2").addClass("X");
  addMark("#field3");
});

$("#field4Button").click(function(){
  // $("#field2").addClass("X");
  addMark("#field4");
});

$("#field5Button").click(function(){
  // $("#field2").addClass("X");
  addMark("#field5");
});

$("#field6Button").click(function(){
  // $("#field2").addClass("X");
  addMark("#field6");
});

$("#field7Button").click(function(){
  // $("#field2").addClass("X");
  addMark("#field7");
});

$("#field8Button").click(function(){
  // $("#field2").addClass("X");
  addMark("#field8");
});

$("#field9Button").click(function(){
  // $("#field2").addClass("X");
  addMark("#field9");
});












/* if don't want to go square by square then need to experiment with wrapping grid in div and applying logic of disabling boxes w/ X or O in it to whole grid */

/* if counter % 2 = 0, then it's an X
if counter % 2 = 1, then it's an O */



//unbind fuction will remove the funtion from the click







});
