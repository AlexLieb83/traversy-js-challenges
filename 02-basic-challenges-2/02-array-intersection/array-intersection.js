function arrayIntersection(arr1, arr2) {
  //make arr1 into a Set. loop over arr2, if num is also in Set, then it is a match, put it into return array, return array

  const set1 = new Set(arr1);
  let intersectionArr = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      intersectionArr.push(num);
    }
  }
  return intersectionArr;
}

module.exports = arrayIntersection;
