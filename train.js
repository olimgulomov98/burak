function getHighestIndex(arr) {
  let highestIndex = arr.indexOf(Math.max(...arr));
  return highestIndex;
}

console.log(getHighestIndex([5, 21, 12, 21, 8]));
