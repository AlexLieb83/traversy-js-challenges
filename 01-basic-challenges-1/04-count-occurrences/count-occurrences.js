// function countOccurrences(string, char) {
//   let count = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }

// hellLo world => [he, '', Lo wor, d] => splits on l, so array of 4, meaning there's 3 'l' in the string
const countOccurrences = (string, char) => string.split(char).length - 1;

module.exports = countOccurrences;
