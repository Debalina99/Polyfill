String.prototype.myCharAt = function (ind) {
  let inputStr = this;
  let index = ind !== null ? ind : 0;
  if (index < 0 || index > inputStr.length) {
    return "";
  }
  return inputStr[index];
};

const str = "Hello World";
const index = 4;
console.log(`The character at index ${index} is ${str.myCharAt(index)}`);
console.log(str);
