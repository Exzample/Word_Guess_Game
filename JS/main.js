console.log("Hello World");
var randomAnimal = 0;
var word = "";
var numWrong = [];
var numRight = 0;
var animalsLength = [];
var numChar = 0;
var blanksAndSuccesses = [];
var letterGuessed = "";
var totalGuesses = 9;
var animalsArray = ["tiger", "cat", "dog"];
//put other categories below here:

var userInput = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"];

var randomAnimal = animalsArray[Math.floor(Math.random() * animalsArray.length)]

function startGame() {
    //how many guesses does the user get?
    totalGuesses = 9;

    //choose random word from array
    answer = animalsArray[Math.floor(Math.random() * animalsArray.length)];

    //the Animal is broken into individual letters
    animalsLength = word.split("");

    numChar = animalsLength.length;

    console.log(word);

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
    //Need to find a way to end this sucker.
    //When the Answer Array = the letters in animalsArray the game will .prompt("you have guess right, you win the game!");
    function winner() {
      if (answerArray = animalsArray);
      return getElementById("winner").innerHTML = "You guess " + answersArray[i];
    }
    */