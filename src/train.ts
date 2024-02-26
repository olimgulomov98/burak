// H-TASK

function getReverse(str: string) {
  // 1 method - by reverse
  //   return str.split("").reverse().join("");

  // 2 method - by for loop
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(getReverse("hello"));
