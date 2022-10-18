// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password Requirments
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowercase = uppercase.map(letter => letter.toLowerCase())
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const special = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "[", "]", "{", "}"]

//Calls on the random integer to be a whole number for use
function getRandomInt(max) {
  return Math.ceil(Math.random() * max)

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate Password
function generatePassword () {
  //How long do you want password
  var passwordLength = prompt('How many characters would you like your password to be? (8-128)', '12')
  //Ask if you want uppercase
  var useUppercase = confirm('Would you like to use uppercase letters?')
  //Ask if you want lowercase
  var useLowercase = confirm('Would you like to use lowercase letters?')
  //Ask if you want numbers
  var useNumbers = confirm('Would you like to use numbers?')
  //Ask if you want special char
  var useSpecial = confirm('Would you like to use special characters?')

  //Arrange all char choices into one variable to use as base for password generation
  var potentialChar = []
  if (useUppercase) {
    potentialChar = potentialChar.concat(uppercase)
  }

  if (useLowercase) {
    potentialChar = potentialChar.concat(lowercase)
  }

  if (useNumbers) {
    potentialChar = potentialChar.concat(numbers)
  }

  if (useSpecial) {
    potentialChar = potentialChar.concat(special)
  }

//Take length input and set it for potentialChar to fill in
var password = ''
for (var i = 0; i < passwordLength; i++) {
  password = password + potentialChar[getRandomInt(potentialChar.length)]

}

return password










}