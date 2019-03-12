var randomAnimal = 0;
var word = "";
var numWrong = 0;
var numRight = 0;
var animalsLength = 0;
var numChar = 0;

var animalsArray = ["tiger", "cat", "dog"];
//put other categories below here:

var userInput = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"];

var randomAnimal = animalsArray[Math.floor(Math.random() * animalsArray.length)]

$(document).ready(function () {

    
});
/*
$(button).toggle(function () {
    $(this).onclick($(this).hide());
});

Start the game
$("#start").on("keydown", function (event) {
    if (event.which == 13)
        alert("Entered!");
});

$(function () {
    $("#chkbtn").on('click', function () {
        $(this).hide();
        $("#hidden-div").show();
    });
});
*/


    //need to make letter buttons hide when they're clicked //
                                        {
    //need to make the right numbers append to the answers position and wrong answers disappear and count incorrect guesses//
 //       $('$userInput').submit(this.value);
   // });

  





/*var animalsArray = ["tiger", "cat", "dog", "parrot", "zebra"];

//This Chooses a random index number of the animalsArray
var randomAnimal = animalsArray[Math.floor(Math.random() * animalsArray.length)]

var s;
var count = 0;
var answerArray = [];


function startUP() {
    for (i = 0; i < animalsArray.length; i++) {
        answerArray[i] = '_';
    }
    //puts the array into a string// DON'T NEED!//
    //s = answerArray.join("_");
    //document.getElementById("answer").innerHTML = s;
}
//Returns the letter that's typed in the box//
function Letter() {
    var letter = document.getElementById("letter").value;
    //Makes sure we have a guess
    if (letter.length > 0) {
        for (i = 0; i < randomAnimal.length; i++) {
            //NOW IF THE animal contains a letter that the user typed in//
            if (randomAnimal[i] === letter) {
                //Assigns the input letter to letter//
                answerArray[i] = letter;
            }
            if (randomAnimal === answerArray) {
                prompt("You Win!");
                winner++;
            }
        }
        //this counts how many times it takes to guess//
        count++;
        document.getElementById("counter").innerHTML = "Number of clicks: " + count;
        document.getElementById("answer").innerHTML = answerArray.join(" ");

        //just a thing to end the game
        if (count > 5) {
            document.getElementById("stat").innerHTML = "Come On - You Should Have Guessed IT By Now";
        }
    }
}
/*
Need to find a way to end this sucker.
When the Answer Array = the letters in animalsArray the game will .prompt("you have guess right, you win the game!");
function winner() {
  if (answerArray = animalsArray);
  return getElementById("winner").innerHTML = "You guess " + answersArray[i];
}
*/