const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const value1 = "A";
const value2 = () => {};
const value3 = undefined;
const value4 = null;
function argsIsArr(src, curr) {
  for (let i = 0; i <= curr.length - 1; i++) {
    src.push(curr[i]);
  }
  return src;
}
Array.prototype.myConcat = function () {
  let inputArr = this;
  let args = arguments;
  // console.log(inputArr);
  // console.log(args);
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      argsIsArr(inputArr, args[i]);
    } else {
      inputArr.push(args[i]);
    }
  }
  return inputArr;
};

console.log(arr1.concat(arr2, value1, value2, value3, value4));
console.log(arr1.myConcat(arr2, value1, value2, value3, value4));
