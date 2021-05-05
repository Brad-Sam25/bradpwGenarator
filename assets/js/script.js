// Assignment Code
//special characters array
var specialChars = ["", "#"];

var numbArray = ["1", "2"];

var lowerCase = ["a", "b"];
// look up split method
var upperCase = ["A","B"];


//Function to prompt the user fo password options
  //create a variable to store the length of the password
  var length = parseInt (
    prompt('How many characters would you like your password to be?')
  )
  //create conditional statement to check if password length is actually a number
  if (Number.isNaN(lenght)){
    alert('password must be a number');
    return null;
  }

  //conditional statement to check if password is at least 8 chars 
  if(length <  8) {
    alert("password lenght must be at least 8 characters")
    return null;
  };


  //Conditional statement to check if password length is at least 128 characters
  if(length < 128) {
    alert("password lenght must be at least 128 characters")
    return null;
  };

  //create confirmation prompts for the type od characters the user wants to use in their password.

  //need to create a conditional statement to check if user included at least 1 of the char types. Return user back to start of application


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
