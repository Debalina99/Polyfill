const value1 = "A";
const value2 = "Bat";
const value3 = " Cat";
const value4 = " Dog";

String.prototype.myStringConcat = function () {
  let inputStr = this.toString();
  
  let args = arguments;
  for (let i = 0; i < args.length; i++) {
    inputStr += args[i];
  }
  return inputStr;
};

console.log(value1.concat(" ", value2, value3, value4));
console.log(value1.myStringConcat(" ", value2, value3, value4));
