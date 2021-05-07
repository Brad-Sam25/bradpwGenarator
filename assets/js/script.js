// Assignment Code
//special characters array
function generatePassword() {
  let specialChars = ["@", "#","$","&","!"];
  let numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperCase = ["A","B","C","D","E","F","G","H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let passLength;

  do{
    passLength = prompt("How many characters would you like in your password? Choose between 8 and 128.","");
  } while (passLength < 8 || passLength > 128);

  let characterArray = [];

  let specialConfirm;
  let numberConfirm;
  let lowerConfirm;
  let upperConfirm;

  do{
    alert("Please decide what character types you would like, you need to choose at least one.");
    specialConfirm = confirm("Would you like special characters?");
    numberConfirm = confirm("Would you like number characters?");
    lowerConfirm = confirm("Would you like lowercase characters?");
    upperConfirm = confirm("Would you like uppercase characters?");
  } while (specialConfirm === false && numberConfirm === false && lowerConfirm === false && upperConfirm === false);

  if (specialConfirm === true) {
    for (let char of specialChars) {
      characterArray.push(char);
    }
  }

  if (numberConfirm === true) {
    for (let char of numbArray) {
      characterArray.push(char);
    }
  }

  if (lowerConfirm === true) {
    for (let char of lowerCase) {
      characterArray.push(char);
    }
  }

  if (upperConfirm === true) {
    for (let char of upperCase) {
      characterArray.push(char);
    }
  }

  let finalPass = "";

  for (let i = 0; i < passLength; i++) {
    let selector = Math.floor(Math.random() * characterArray.length);
    let character = characterArray[selector];
    finalPass += character;
  }
  return finalPass;
};

  let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
