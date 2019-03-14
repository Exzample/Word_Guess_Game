alert('javascript file loaded');
var correctAnswer = "";
var numWrong = 0;//score
var numRight = 0;//score
var remainingGuesses = 10;//number of guesses before the game is over
var totalGuesses = (numWrong + numRight);//adding all guesses to total guesses
var randomAnimal = "";
var userGuess = "";
var animalsArray = ["tiger", "cat", "dog"];

var userInput = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"];
//put other categories below here:

function getRandomAnimal() {
    var random = Math.floor(Math.random() * animalsArray.length);
    var randIndex = Math.floor(rand);
    return randomAnimal[random];
}

function printArray(Arr){
    for(i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    console.log("---------")
};

//I think I may need to convert randomAnimal to string//






/*
$(document).ready(function () {
    //This may help register the user guess
    this.onkeyup = function(event) {
    
            // Captures the key press, converts it to Upper Case, and saves it to a variable.
            var userGuess = event.key.toUpperCase();
    
            // If the letter is h, run the following functions/methods.
            if (userGuess === randomAnimal) {
                //Create a global function that takes a letter button and moves it to the game area//
               userGuess.function that makes the letter button move to the game area();
              //Create a global function that generates stats on the screen
              reWriteStats();
            }
    
            // If the letter is not random animal, run the following functions/methods.
            if (userGuess != randomAnimal) {
                userGuess.function that hides/crosses out letter from letter buttons();
                userGuess.function that hangs the man ();
                reWriteStats();
                }
            };

    
});


    //this is a function that will update all stats on the document when 
    function reWriteStats() {
        console.log("Make: " + car.make);
        console.log("Model: " + car.model);
        console.log("Color:" + car.color);
        console.log("Mileage: " + car.mileage);
        console.log("Is Working: " + car.isWorking);
        console.log("------------------------------");
    }
       
      



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



    //need to make letter buttons hide when they're clicked //
                                        {
    //need to make the right numbers append to the answers position and wrong answers disappear and count incorrect guesses//
 //       $('$userInput').submit(this.value);
   // });

  





var animalsArray = ["tiger", "cat", "dog", "parrot", "zebra"];

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

Need to find a way to end this sucker.
When the Answer Array = the letters in animalsArray the game will .prompt("you have guess right, you win the game!");
function winner() {
  if (answerArray = animalsArray);
  return getElementById("winner").innerHTML = "You guess " + answersArray[i];
}
