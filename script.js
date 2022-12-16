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
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", ",", "<", ">", ".", "?", "/"]
//Function to randomly generate numbers to pull from indices
function generatePassword() {
  //Prompt to ask the user the specifics
  var legnth = prompt("Enter legnth of password");
  if (legnth < 8 || legnth > 128){
    alert("Too short or too long")
    return
  }
  var lowercasePrompt = prompt("Lowercase letters? Y/N");
  var uppercasePrompt = prompt("Uppercase letters? Y/N")
  var numbersPrompt = prompt("Numbers? Y/N")
  var symbolsPrompt = prompt("Symbols? Y/N")
  //To record the responses
  var lowercasepromptResult = ""
  var uppercasepromptResult = ""
  var numberspromptResult = ""
  var symbolspromptResult = ""
  //Ifs to check to make sure a response was collected
  
  if (lowercasePrompt.toUpperCase() === "Y") {
    var lowercasepromptResult = "Y"
    return
  }
  if (uppercasePrompt.toUpperCase() === "Y") {
    var uppercasepromptResult = "Y"
    return
  }
  if (numbersPrompt.toUpperCase() === "Y") {
    var numberspromptResult = "Y"
    return
  }
  if (symbolsPrompt.toUpperCase() === "Y")
  {
    var symbolspromptResult = "Y"
    return
  }
  if (lowercasePrompt !== "Y" && uppercasePrompt !== "Y" && numbersPrompt !== "Y" && symbolsPrompt !== "Y"){
    alert("Invalid criteria selected")
    return
  }
  //Function to pull from indices with random numbers




  //Output the password
}