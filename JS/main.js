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

//var userInput = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"];
//put other categories below here:

//Create a function to start the game//
function startGame() {
    //Reset the counters and arrays at the beginning of each game//
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
    var letterInWord = false;
    //Check to see if a letter exists inside the array//
    for (i = 0; i < numChar; i++){
        if (lettersInComputerSelection[i] === letter) {
            letterInWord = true;
        }
    } 
    if (letterInWord) {
        for (j = 0; j < numChar; j++) {
            if (lettersInComputerSelection[j] === letter){
              remainingAndSolvedLetters[j] = letter;
            }
        }
        console.log(remainingAndSolvedLetters);
    } 
    else {
        //If the user Guess is wrong we want to push the answer to wrongGuesses Array//
        wrongGuesses.push(letter);
        //If wrong decrease the score by one//
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
//document.onclick = function(button, event) {
    //converts all keyboard values to lowercase letters//
    /*userGuess = String.fromCharCode(event.which).toLowerCase();*/
document.onkeyup = function(event){
    userGuess = String.fromCharCode(event.which).toLowerCase();
    //Runs the code to check for correct guesses
    checkLetters(userGuess);
    //Run the code that ends each round//
    roundComplete();
};