function arrayIntersection(arr1, arr2) {
  //use set to store elements of arr1, then loop over arr2, check if each elem is in the Set with .has()

  const set1 = new Set(arr1);
  let resultArr = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      resultArr.push(num);
    }
  }

  // arr2.map((elem) => (set1.has(elem) ? resultArr.push(elem) : null));

  return resultArr;
}

module.exports = arrayIntersection;
