// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
function generatePassword() {

  // Ask the user for length
  // (Minium of 8 characters, maximum of 128)
  let passwordLength = parseInt(prompt("How long should the password be? \nPlease choose between 8 and 128 characters."));

  // Validate Length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error, invalid password length. \nPlease choose a password greater than 8 and less than 128 characters.");
    return "";
  }

  // Ask the user for which characters to include
  var includeLowercase = confirm("Include lowercase letters in password?");
  var includeUppercase = confirm("Include uppercase letters in password?");
  var includeNumbers = confirm("Include numbers in password?");
  var includeSpecialCharacters = confirm("Include special characters in password?"); 
  
  // Validate types of characters
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    alert("Error, invalid character types. \nPlease include at least one type of character.");
    return "";
  }

  // Set constants
  let results = "";
  let passwordArray = [];
  let flatPasswordArray = [];

  let passwordLowercase = [];
  const lowercase = "abcedefghijklmnopqrstuvwxyz";

  let passwordUppercase = [];
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let passwordNumbers = [];
  const numbers = "0123456789";

  let passwordSpecialCharacters = [];
  const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Divide the string into an array
  if (includeLowercase) {
    passwordLowercase = passwordLowercase.concat(lowercase.split(""));
  };

  if (includeUppercase) {
    passwordUppercase = passwordUppercase.concat(uppercase.split(""));
  };

  if (includeNumbers) {
    passwordNumbers = passwordNumbers.concat(numbers.split(""));
  };

  if (includeSpecialCharacters) {
    passwordSpecialCharacters = passwordSpecialCharacters.concat(specialCharacters.split(""));
  };

  // Push selected prompts into a new array
  if (includeLowercase) {
    passwordArray.push(passwordLowercase);
  } 
  if (includeUppercase) {
    passwordArray.push(passwordUppercase);
  }
  if (includeNumbers) {
    passwordArray.push(passwordNumbers);
  }  
  if (includeSpecialCharacters) {
    passwordArray.push(passwordSpecialCharacters);
  } 
  
  // Concatenate the password array
  flatPasswordArray = passwordArray.flat()
  
  // Generate a random password 
  for (var i=0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * flatPasswordArray.length);
    let randomPassword = flatPasswordArray[randomIndex];
    results += randomPassword;
  }  

  // Return the generated password
  return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
