// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// ******************************************************************
// Ask for length and verify if it meets requirements
var passwordLength = function() {
  var length = prompt("How many characters would you like in your password?  Please choose between 8 and 128 characters");
      if (length < 8 || length > 128) {
        alert("Not a valid option. Please try again.")
        passwordLength();
      } else {
        console.log(length);  
        return length;

     }
  }
var chosenPasswordLength = passwordLength();

// Confirm the type of characters to include in your code

var upper = confirm("Click OK to include uppercase letters?")
var lower = confirm("Click OK to include lowercase letters?")
var numbers = confirm("Click OK to include numbers?")
var special = confirm("Click OK to include special characters?")

var upperConfirm = "ABCDEFHGIJKLMNOPQRSTUVWXYZ"
var lowerConfirm = "abcdefghijklmnopqrstuvwxyz"
var numberConfirm = "0123456789"
var specialConfirm = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "

// generate a strig of variables if true

var charConfirm = "";
if (upper) {
    charConfirm += upperConfirm;
}
if (lower) {
    charConfirm += lowerConfirm;
}
if (numbers) {
    charConfirm += numberConfirm;
}
if (special) {
    charConfirm += specialConfirm;
}

console.log(charConfirm);

// Takes string of confirmed characters and randomizes them


function generatePassword() {
  
  var randomString = "";
  for (var i = 0; i < chosenPasswordLength; i++) {
      randomString += charConfirm.charAt(Math.floor(Math.random() * charConfirm.length));
  }
  return randomString;
}




// ******************************************************************
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
