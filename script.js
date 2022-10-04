// Get references to the #generate element
var generateBtn = document.getElementById("generate");
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Assignment code here
let choiceArr = []

const specialCharArr = ["!","#","@","$","%","^","&","*","(",")","{","}","[","]","?",">","<",";",":","~"];
const lowerCassArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCaseArr= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numberArr = ["1","2","3","4","5","6","7","8","9","0"]


// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getCharacterLength() {
  let desiredLength = prompt('Enter desired length for password (min 8, max 128): ')
  while (isNaN(desiredLength) || desiredLength < 8 || desiredLength > 128) {
    alert('That is not a valid entry. Please enter a number between 8 and 128')
    desiredLength = prompt('Entered desired length for password again: ')
    let isCancelled = desiredLength == null
    if (isCancelled) {
      alert('Come back when you\'re ready')
      break
    }
  }

  return desiredLength
}

function promptForSpecialChar() {
 let wantsSpecialChar = confirm('Do you want special characters (e.g. !#*@)?')
 return wantsSpecialChar

}

function promptForLowercase() {
  let wantsLowerChar = confirm('Do you want lowercase characters in your password?')
  return wantsLowerChar
}

function promptForUppercase() {
  let wantsUpperChar = confirm('Do you want uppercase characters in your password?')
  return wantsUpperChar
}

function promptForNumber () {
  let wantsNumberChar = confirm ('Do you want numbers in your password?')
  return wantsNumberChar
}

function shuffleArray(array) {
  array.sort( () => Math.random() - 0.5)
}


function generatePassword() {
  const passwordLength = getCharacterLength()

  if (passwordLength == null) {
    return 'Cancelled attempt'
  }

  const includeSpecialCharacters = promptForSpecialChar()
  const includeLowercase = promptForLowercase()
  const includeUppercase = promptForUppercase()
  const includeNumber = promptForNumber()

  if (includeSpecialCharacters) {
    choiceArr = choiceArr.concat(specialCharArr)
  }

  if (includeLowercase) { 
    choiceArr = choiceArr.concat(lowerCassArr)
  }

  if (includeUppercase) {
    choiceArr = choiceArr.concat (upperCaseArr)
  }

  if (includeNumber) {
    choiceArr = choiceArr.concat (numberArr)
  }

  shuffleArray(choiceArr)
  let joinedchar = choiceArr.join('')
  let slicedpasswordatlength = joinedchar.slice(0,passwordLength)

  return slicedpasswordatlength
}









