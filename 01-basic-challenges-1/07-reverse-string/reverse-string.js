function reverseString(str) {
  let letters = "";

  for (let i = str.length - 1; i >= 0; i--) {
    letters += str[i];
  }

  return letters;
}

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

module.exports = reverseString;
