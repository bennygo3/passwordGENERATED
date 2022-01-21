/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/


// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChars ="abcdefghijklmnopqrstuvwxyz";
var upperChars = lowerChars.toUpperCase();
var numChars = "1234567890";
var speChars = "!@#$%^&*()+_~`=-?><}{][|";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  //prompts
  //length prompt
  var lengthChoice = prompt('Please choose the length of password. Password must be between 8-128 characters');

  if(lengthChoice === null){
    return
  }
   if(lengthChoice <8 || lengthChoice > 128 || isNaN(lengthChoice) || !lengthChoice){
    alert("Please choose a number betwen 8-128");
    return generatePassword();
  }


  
  
   
  var lowerPrompt = confirm('Would you like your password to include lower case letters? If yes then click ok. If no then click cancel.');
  var upperPrompt = confirm('Would you like your password to include UPPER CASE letters? If yes then click ok. If no then click cancel.');
  var numPrompt = confirm('Would you like your password to include numbers? If yes then click ok. If no then click cancel.')
  var specialPrompt = confirm('Would you like to include special characters? If yes then click ok. If no then click cancel.');
  var possibleChars = "";

  if(lowerPrompt) {
    possibleChars += lowerChars;
  }

  if(upperPrompt) {
    possibleChars += upperChars;
  }

  if(numPrompt) {
    possibleChars += numChars;
  }

  if(specialPrompt) {
    possibleChars += speChars;
  }

  console.log(possibleChars);

  if(!lowerPrompt && !upperPrompt && !specialPrompt && !numPrompt) {
    alert("You must select ok for one of the options.");
    return generatePassword();
  }

  var generatedPassword = ""

  for(i=0; i<lengthChoice; i++){
    var randomIndex = Math.floor(Math.random() * possibleChars.length)
    var randomCharacter = possibleChars[randomIndex]
    generatedPassword += randomCharacter
  }

  return generatedPassword
}

generateBtn.addEventListener("click", writePassword);   



  



