// L-TASK:

function reverseSentence(str: string): string {
  return str
    .split(" ")
    .map((str) => str.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseSentence("we like coding!"));
