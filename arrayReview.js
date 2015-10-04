var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

function last(array) {
    var lastItem = array[array.length - 1];
    alert(lastItem);
}

last(threeItems);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

function removeEvens(array) {
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0) {
            array.splice(i, 1);
        }
    }
}

removeEvens(evenArray);
console.log(evenArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
};

var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

function randomFunction(array) {
    var randomNumber = getRandomArbitrary();
    alert(randomNumber);
    for (var i = 0; i < array.length; i++) {
        if (array[i] === randomNumber) {
            alert("true");
            return;
        } 
    } 
    alert("false");
}

randomFunction(randomArray);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

var second = first.slice(0, first.length - 1);
second.push(6, 7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best";

function longest(sentence) {
    var longestWord = "";
    var sentenceArray = sentence.split(" ");
    for (var i = 0; i < sentenceArray.length; i++) {
        if (sentenceArray[i].length > longestWord.length) {
            longestWord = sentenceArray[i];
        }
    }
    return longestWord;
}
    
longest(sentence);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

function capitalize(str) {
    return str.toUpperCase();
}

capitalize(myPoem);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function vowelCounter(str) {
    var strArray = str.split("");
    var counter = 0;
    for (var i = 0; i < strArray.length; i++) {
        if (strArray[i] === "a" || strArray[i] === "e" || strArray[i] === "i" || strArray[i] === "o" || strArray[i] === "u") {
            counter++;
        }
    }
    return counter;
}

vowelCounter(theOdyssey);