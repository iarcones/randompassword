// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "."
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

const askOptions = function() {
  console.log("askoptions");

  let length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8 || length > 128) {
    alert("Password length must be minumun 8 characters, maximun 128");
    return;
  }

  // Variable to store boolean regarding the inclusion of special characters
  let special = confirm("Click OK to confirm including special characters.");

  // Variable to store boolean regarding the inclusion of numeric characters
  let number = confirm("Click OK to confirm including numeric characters.");

  // Variable to store boolean regarding the inclusion of lowercase characters
  let lower = confirm("Click OK to confirm including lowercase characters.");

  // Variable to store boolean regarding the inclusion of uppercase characters
  let upper = confirm("Click OK to confirm including uppercase characters.");

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    special === false &&
    number === false &&
    lower === false &&
    upper === false
  ) {
    alert("Must select at least one character type");
    return;
  }

  // Object to store user input
  let passwordOptions = {
    length: length,
    special: special,
    number: number,
    lower: lower,
    upper: upper
  };

  generatePass(passwordOptions);
};

const generatePass = function(options) {
  // get one random elem for each type chosen
  // dif lenght asked - lenght current and loop for the rest of the elements
  // shuffle to avoid to have the first characters always in the same place
  // show the password

  let pass = [];
  let total = [];

  if (options.special) {
    total = total.concat(specialCharacters);
    pass.push(getRandom(specialCharacters));
  }
  if (options.number) {
    total = total.concat(numericCharacters);
    pass.push(getRandom(numericCharacters));
  }
  if (options.lower) {
    total = total.concat(lowerCasedCharacters);
    pass.push(getRandom(lowerCasedCharacters));
  }
  if (options.upper) {
    total = total.concat(upperCasedCharacters);
    pass.push(getRandom(upperCasedCharacters));
  }

  // get the rest of the characters after get one at least from every group chosen
  let rest = options.length - pass.length;

  for (let i = 0; i < rest; i++) {
    pass.push(getRandom(total));
  }

  // shuffle to avoid to have always the firts characters in the same order (Fisher-Yates shuffle: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
  for (let i = pass.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = pass[i];
    pass[i] = pass[j];
    pass[j] = temp;
  }
  showpass(pass);
};

function showpass(pass) {
  document.querySelector("#password").textContent = pass.join("");
  copyBtn.removeAttribute("disabled");
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let randElement = arr[randIndex];

  return randElement;
}

function copyToClipboard(){
    let passCopy = document.querySelector("#password")
    passCopy.select()
    document.execCommand("copy")
}
// Get references to the #copy and #generate elements
const copyBtn = document.querySelector("#copy");
const generateBtn = document.querySelector("#generate");

generateBtn.onclick = askOptions;
copyBtn.onclick = copyToClipboard;
