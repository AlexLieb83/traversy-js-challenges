function findMissingNumber(arr) {
  //if empty return 1
  if (arr.length === 0) return 1;

  //n = number of numbers in array
  const n = arr.length + 1;
  //gives us sum of consecutive numbers
  const expectedSum = (n * (n + 1)) / 2;
  //sum of numbers in array
  const actualSum = arr.reduce((acc, c) => acc + c, 0);

  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
