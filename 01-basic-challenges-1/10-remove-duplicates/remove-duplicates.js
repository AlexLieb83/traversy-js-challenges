// function removeDuplicates(arr) {
//   let fixedArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!fixedArr.includes(arr[i])) {
//       fixedArr.push(arr[i]);
//     }
//   }
//   return fixedArr;
// }

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

module.exports = removeDuplicates;
