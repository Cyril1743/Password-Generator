// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Varbles for indices for letters, and or numbers, and or symbols
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", ",", "<", ">", ".", "?", "/"];
//Function to randomly generate numbers to pull from indices
function generatePassword() {
  //Prompt to ask the user the specifics
  var length = prompt("Enter length of password. 8-128 characters.");
  if (length < 8 || length > 128) {
    alert("Invalid Length");
    return
  }
  var lowercasePrompt = prompt("Lowercase letters? Y/N");
  var uppercasePrompt = prompt("Uppercase letters? Y/N");
  var numbersPrompt = prompt("Numbers? Y/N");
  var symbolsPrompt = prompt("Symbols? Y/N");
  //For the final product
  var finalPassword = [];
  //To record the responses
  var lowercasepromptResult = "";
  var uppercasepromptResult = "";
  var numberspromptResult = "";
  var symbolspromptResult = "";
  //Ifs to check to make sure a response was collected

  if (lowercasePrompt.toUpperCase() === "Y") {
    var lowercasepromptResult = "Y";
  }
  if (uppercasePrompt.toUpperCase() === "Y") {
    var uppercasepromptResult = "Y";
  }
  if (numbersPrompt.toUpperCase() === "Y") {
    var numberspromptResult = "Y";
  }
  if (symbolsPrompt.toUpperCase() === "Y") {
    var symbolspromptResult = "Y";
  }
  if (lowercasePrompt !== "Y" && uppercasePrompt !== "Y" && numbersPrompt !== "Y" && symbolsPrompt !== "Y") {
    alert("Invalid criteria selected");
  }


  //Function to pull from indices with random numbers
  function lowercaseletterFunction(x) {
    for (var i = 0; i < x; i++) {
      var random = Math.floor(Math.random() * 28);
      finalPassword.push(lowercaseLetters[random]);
    }
  }
  function uppercaseletterFunction(x) {
    for (var i = 0; i < x; i++) {
      var random = Math.floor(Math.random() * 28);
      finalPassword.push(uppercaseLetters[random]);
    }
  }
  function numbersFunction(x) {
    for (var i = 0; i < x; i++) {
      var random = Math.floor(Math.random() * 9);
      finalPassword.push(numbers[random]);
    }
  }
  function symbolsFunction(x) {
    for (var i = 0; i < x; i++) {
      var random = Math.floor(Math.random() * 18);
      finalPassword.push(symbols[random]);
    }
  }
  //Ifs to determine what function will run with selected criteria
  if (lowercasepromptResult === "Y" && uppercasepromptResult === "Y" && numberspromptResult === "Y" && symbolspromptResult === "Y") {
    lowercaseletterFunction(Math.floor(length / 4) + (length % 4));
    uppercaseletterFunction(Math.floor(length / 4));
    numbersFunction(Math.floor(length / 4));
    symbolsFunction(Math.floor(length / 4));
  } else if (lowercasepromptResult === "Y" && uppercasepromptResult === "Y" && numberspromptResult === "Y") {
    lowercaseletterFunction(Math.floor(length / 3) + (length % 3));
    uppercaseletterFunction(Math.floor(length / 3));
    numbersFunction(Math.floor(length / 3));
  } else if (lowercasepromptResult === "Y" && uppercasepromptResult === "Y" && symbolspromptResult === "Y") {
    lowercaseletterFunction(Math.floor(length / 3) + (length % 3));
    uppercaseletterFunction(Math.floor(length / 3));
    symbolsFunction(Math.floor(length / 3));
  } else if (lowercasepromptResult === "Y" && numberspromptResult === "Y" && symbolspromptResult === "Y") {
    lowercaseletterFunction(Math.floor(length / 3) + (length % 3));
    numbersFunction(Math.floor(length / 3));
    symbolsFunction(Math.floor(length / 3));
  } else if (uppercasepromptResult === "Y" && numberspromptResult === "Y" && symbolspromptResult === "Y") {
    uppercaseletterFunction(Math.floor(length / 3) + (length % 3));
    numbersFunction(Math.floor(length / 3));
    symbolsFunction(Math.floor(length / 3));
  } else if (lowercasepromptResult === "Y" && uppercasepromptResult == "Y") {
    lowercaseletterFunction(Math.floor(length / 2) + (length % 2));
    uppercaseletterFunction(Math.floor(length / 2));
  } else if (lowercasepromptResult === "Y" && symbolspromptResult === "Y") {
    lowercaseletterFunction(Math.floor(length / 2) + (length % 2));
    symbolsFunction(Math.floor(length / 2));
  } else if (lowercasepromptResult === "Y" && numberspromptResult === "Y") {
    lowercaseletterFunction(Math.floor(length / 2) + (length % 2));
    numbersFunction(Math.floor(length));
  } else if (uppercasepromptResult === "Y" && numberspromptResult === "Y") {
    uppercaseletterFunction(Math.floor(length / 2) + (length % 2));
    numbersFunction(Math.floor(length / 2));
  } else if (uppercasepromptResult === "Y" && symbolspromptResult === "Y"){
    uppercaseletterFunction(Math.floor(length/2)+(length%2));
    symbolsFunction(Math.floor(length/2));
  } else if (numberspromptResult === "Y" && symbolspromptResult === "Y") {
    numbersFunction(Math.floor(length/2)+(length%2));
    symbolsFunction(Math.floor(length/2));
  } else if (lowercasepromptResult === "Y") {
    lowercaseletterFunction(length);
  } else if (uppercasepromptResult === "Y") {
    uppercaseletterFunction(length);
  } else if (symbolspromptResult === "Y") {
    symbolsFunction(length);
  } else if (numberspromptResult === "Y") {
    numbersFunction(length);
  }
  //Output the password
  return finalPassword;
}
