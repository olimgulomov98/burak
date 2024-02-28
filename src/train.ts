// H-TASK

function getPositive(arr: number[]) {
  const positive: string[] = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((num) => num.toString());

  const result: string = positive.join("");
  return result;
}
console.log(getPositive([1, -4, 2]));
