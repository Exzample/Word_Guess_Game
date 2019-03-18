console.log("javascript.main loaded...");

//Categories for array of words//
var animalsArray = ["tiger", "cat", "dog"];
//Create variable to store the computer's selection//
var computerSelection = "";
// Create a variable "sring" to the letters that the user guessed//
var userGuess = "";
// Create a variable to match "_"(blanks) to the lenth of the computerSelecion aray//
var numChar = 0;
//Create variable to place computerSelection into an empty array//
var lettersInComputerSelection = [];
// Create a variable [arr]to hold Blank Letters and Solved letters to display correct or incorect guesses//
var remainingAndSolvedLetters = [];
// Create a variable [arr] to hold wrongGuesses//
var wrongGuesses = [];

//Counters//
//Create a variable to display stats to the scoreboard//
var wins = 0;
var loss = 0;
var guessesAllowed = 10;

var userInput = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"];
//put other categories below here:

//Create a function to start the game//
function startGame() {
    //Reset the counters and arrays at the begininig of each game//
    guessesAllowed = 10;
    remainingAndSolvedLetters = [];
    wrongGuesses = [];
    //Computer chooses a random animal from animalsArray//
    computerSelection = animalsArray[Math.floor(Math.random() * animalsArray.length)];
    //Break the computerSelection into individual letters//
    lettersInComputerSelection = computerSelection.split("");
    //Pass in the number of characters of the computerSelection into the numChar variable//
    numChar = lettersInComputerSelection.length;
    //for testing "print the computerSelection to console"//
    console.log(computerSelection);
    //Fill up the remainingAndUnsolvedLetters [] with "_" per the .length of computerSelection//
    for (i = 0; i < numChar; i ++) {
        remainingAndSolvedLetters.push("_");
    }
    console.log(remainingAndSolvedLetters);
    //Prints the number of guesses remaining at the begining of the game//
    document.getElementById("remaining ").innerHTML = guessesAllowed;
    //prints blanks in the #word-blanks at the start of the the game//
    document.getElementById("word-blanks").innerHTML = remainingAndSolvedLetters.join(" ");
    //Clears the #wrong guesses from the previous round//
    document.getElementById("wrong ").innerHTML = wrongGuesses.join(" ");
}

//CheckLetters() function that takes each user input letter as an arguement//
//All comparisons for matches will happen here//
function checkLetters(letter){
    var lettersInComputerSelection = false;
    //Check to see if a letter exists inside the array//
    for (i = 0; i < numChar; i++){
        if computerSelection[i] === letter) {
            lettersInComputerSelection = true;
        }
    } 
    if (lettersInComputerSelection) {
        for (var j = 0; j < numChar; j++) {
            if computerSelection[i] = letter){
              remainingAndSolvedLetters[j] = letter;
            }
        }console.log(remainingAndSolvedLetters);
    } else {
        wrongGuesses.push(letter);
        guessesAllowed--;
    }
}

function completeGame() {
    //Sanity check report stats in console after each user guess//
    console.log("WinCount: " + wins + " | LossCount: " + loss + " | NumGuesses: " + guessesAllowed);
    //Update HTML to reflect the new number of guesses on the page
    //Guesses Remaining are displayed in the #remaining//
    document.getElementById("remaining ").innerHTML = guessesAllowed;
    //print remainingAndSolvedLetters and blanks on to page. Word blanks are displayed in the #word-blanks//
    document.getElementById("word-blanks").innerHTML = remainingAndSolvedLetters.join(" ");
    //print wrong guesses on to the page. Remaining guesses display in #wrong .//
    document.getElementById("wrong ").innerHTML = wrongGuesses.join(" ");
    //Begin logic if user choice = remainingAndSolvedLetters = correct/win//
    if (lettersInComputerSelection.toString() === remainingAndSolvedLetters.toString()){
        wins++;
        alert("You Win!");
        //update html with win//
        document.getElementById("win ").innerHTML = win;
        //Restart the Game//
        startGame();
    }
    //We ran out of guesses//
    else if (guessesAllowed === 0) {
        //iterate losses//
        loss++;
        //What action do you want to happen when you lose?//
        alert("You Lose!");
        //update HTML//
        document.getElementById("loss ").innerHTML = loss;
        //restart the game//
        startGame();
    }
}

//main process (this is the code that conrols what is actually run)

//starts game by running the startGame() function
startGame();
//Then initiates the function for capturing key events// change this to click events latter
//You can capture event clicks with "document.onkeyup = function(event) {"//
document.onclick = function(button, event) {
    //converts all button clicks to lowercase letters//
    /*userGuess = String.fromCharCode(event.which).toLowerCase();*/

    //Runs the code to check for correct guesses
    checkLetters(userGuess);
}






function printArray(Arr){
    for(i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    console.log("---------")
};

/*
//I think I may need to convert randomAnimal to string//


// this function is currently assigned to the OnLoad event of the body of the document.  So when the OnLoad event fires off
// for the body of the html document, the code in this function will automatically execute.
    function onLoad() {
        console.log("onLoad...");
        var textGuess = document.getElementById('txtGuess'); //creating a variable for the text of the guess(pranay)
        currentSecretWord = getSecretWord();
        document.getElementById('hint').innerHTML = "<p>" + currentSecretWord.hint + "</p>";
        player.guesses = MAX_ATTEMPTS;
        //make the value of textGuess null(in case it has a value from previous uses of OnLoad function)
        textGuess.value = '';
        // Focus back on the text input for the next question. --Korey
        textGuess.focus();

    function checkWord() {
        console.log("checkWord...")
        var word = document.getElementById('txtGuess').value;

        if (word.toLowerCase() == currentSecretWord.word) {
            updateScore(true);
            displayResult(true);

            // Remove that question and go to another question.
            // Also, reset the text field to be blank. --Korey
            var correctIndex = secretWords.indexOf(currentSecretWord);
            var correctAnswer = secretWords.splice(correctIndex, 1);
            correctWords.push(correctAnswer);

            document.getElementById('txtGuess').value = "";

        } else {
            updateScore(false);
            displayResult(false);

            // After wrong answer, focus and select the text in the text field. --Korey
            document.getElementById('txtGuess').select();
            }
            onLoad();
        }

        function updateScore(result) {
        // display score div if not yet displayed
            if (scoreLoaded == false) {
                loadScoreDiv();
                scoreLoaded = true;
            }

        function loadScoreDiv() {
            var scoreDiv = document.getElementById('scorebox');
            var topOffset = -60; //push the element above the viewport
            scoreDiv.style.top = topOffset;
            scoreDiv.style.display = "block";
            var loadScore = setInterval(function () {
                topOffset += 1;
                scoreDiv.style.top = topOffset + "px";
                if (topOffset >= 0) {
                    clearInterval(loadScore);
                }
            }, 5);
        }


        // logic for correct answer
        if (result) {
            player.score++;
        }
        // logic for incorrect answer
        else {
            player.guesses -= 1;
            if (player.guesses <= 0) {
                player.finalScore = player.score;
                player.score = 0;
            }
        }
        document.getElementById('score').innerHTML = "<p>Score: " + player.score + "</p>";
    }
    function displayResult(result) {
        var resultDiv = document.getElementById('resultbox');
        var resultDivText = document.getElementById('resultText');
        var guessesDivText = document.getElementById('guessesText');
        var submitButton = document.getElementById('submit');
        var restartButton = document.getElementById('restart');
        resultDiv.style.display = 'block';
        submitButton.disabled = true;
        if (result) {
            resultDivText.innerHTML = 'Correct!';
            resultDiv.style.backgroundColor = 'rgba(0, 255, 0, 0.7)';

        } else {
            if (player.guesses > 0) {
                resultDivText.innerHTML = 'Incorrect!';
                guessesDivText.innerHTML = 'You have ' + player.guesses + ' guesses left.';
                resultDiv.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
            } else {
                resultDivText.innerHTML = 'GAME OVER';
                guessesDivText.innerHTML = 'Final Score: ' + player.finalScore;
                restartButton.style.display = "inline";
                return;
            }
        }
            setTimeout(function () {
                resultDivText.innerHTML = '';
                guessesDivText.innerHTML = '';
                resultDiv.style.display = 'none';
                submitButton.disabled = false;
                document.getElementById('txtGuess').value = '';
            }, 2000);
        }

        function restartGame() {
            var resultDiv = document.getElementById('resultbox');
            var submitButton = document.getElementById('submit');
            var restartButton = document.getElementById('restart');
            resultDiv.style.display = 'none';
            submitButton.disabled = false;
            restartButton.style.display = 'none';

            resetSecretWord(secretWords, correctWords);

            resetPlayer();
            onLoad();
        }

        var resetSecretWord = function (mainArray, tempArray) {
            for (var i = 0; i < tempArray.length; i++) {
                mainArray.push(tempArray[i][0]);
            }
            tempArray.length = 0;
        }

    //the Animal is broken into individual letters
    animalsLength = word.split("");

    numChar = animalsLength.length;

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

    blanksAndSuccesses = [];

    numWrong = [];

    for (i = 0; i < numChar; i++) {
        blanksAndSuccesses.push("_");
    }
    console.log(blanksAndSuccesses);

    document.getElementById("guesses-left").innerHTML = numChar;

    document.getElementById("#word-blanks").innerHTML = blanksAndSuccesses.join("");

    document.getElementById("wrong-guesses").innerHTML = numWrong.join(" ");
}

function checkLetters(letter) {
    var letterInWord = false;

    for (i = 0; i < numChar; i++) {
        if (answer[i] = letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (x = 0; x < numChar; x++) {
            if (answer[x] === letter) {
                blanksAndSuccesses[i] = letter
            };
            console.log(blanksAndSuccesses);
        }
        if (numWrong.push(letter));
        totalGuesses--;
    }


    function roundOver() {
        console.log("WinCount: " + numRight + " | LossCount: " + numWrong + " | NumGuesses: " + totalGuesses);
    }

    document.getElementById("remaining").innerHTML = totalGuesses;

    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join("");

    document.getElementById("loss").innerHTML = numWrong.join(" ");

    if (animalsLength.toString() === blanksAndSuccesses.toString()) {
        numRight++;
        alert("You Win Motherfucker!");

        document.getElementById = ("win").innerHTML = numWrong
        startGame();
    } else if (totalGuesses === 0) {
        alert("If you're not first you're Last!");
        numWrong++;
        document.getElementById("loss").innerHTML = numWrong;

    }



    /*


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
}

Need to find a way to end this sucker.
When the Answer Array = the letters in animalsArray the game will .prompt("you have guessed right, you win the game!");
function winner() {
  if (answerArray = animalsArray);
  return getElementById("winner").innerHTML = "You guess " + answersArray[i];
}
