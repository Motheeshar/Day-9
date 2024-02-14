// Challenge 1
let firstString = "I am a";
let secondString = " Kalvian";
let concatenatedString = firstString + secondString;
document.getElementById("c-1").innerHTML = concatenatedString;

// Challenge 2
let message =
  'If you fail, never give up because FAIL means "First Attempt In Learning".';
document.getElementById("c-2").innerHTML = message;

// Challenge 3
let stringToMeasure = "This is a string.";
console.log("Length of the string:", stringToMeasure.length);
document.getElementById("c-3").innerHTML = stringToMeasure.length;

// Challenge 4
let lowercaseString = "convert me to uppercase";
let uppercaseString = lowercaseString.toUpperCase();
document.getElementById("c-4").innerHTML = uppercaseString;

// Challenge 5
let originalString = "I love programming";
let replacedString = originalString.replace(
  "programming",
  "JavaScript programming",
);
document.getElementById("c-5").innerHTML = replacedString;

// Challenge 6
let stringToRepeat = "Repeat this string. ";
document.getElementById("c-6").innerHTML = stringToRepeat.repeat(3);

// Challenge 7
let stringWithSpaces = "I am a Kalvian";
let stringAsArray = stringWithSpaces.split(" ");
document.getElementById("c-7").innerHTML = stringAsArray;

// Challenge 8
let sentence = "Time and Tide wait for none";
let indexOfTi = sentence.indexOf("Ti");
document.getElementById("c-8").innerHTML = 'Index of "Ti": ' + indexOfTi;

// Challenge 9
let lemonadeString = "When life gives you lemons make lemonade";
let includesLemon = lemonadeString.includes("lemon");
document.getElementById("c-9").innerHTML = 'inclues "lemon": ' + includesLemon;

// Challenge 10
let changeString = "You must be the change you wish to see in the world.";
let changeWord = changeString.slice(15, 21);
let worldWord = changeString.substring(42);
console.log("Word 'change':", changeWord);
console.log("Word 'world':", worldWord);
document.getElementById("c-10").innerHTML =
  'Word "change": ' + changeWord + "<br>" + 'Word "world": ' + worldWord;
