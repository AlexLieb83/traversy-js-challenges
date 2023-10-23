function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const same = [];

  for (const num of arr2) {
    if (set1.has(num)) {
      same.push(num);
    }
  }

  return same;
}

module.exports = arrayIntersection;
