Array.prototype.myReduce = function (callback, initialVal) {
  let inputArr = this;
  let acc = initialVal != null ? initialVal : inputArr[0];

  for (let i = 0; i < inputArr.length; i++) {
    acc = callback(acc, inputArr[i]);
  }
  return acc;
};
const arr = [2, 4, 8, 12];
console.log(arr.myReduce((acc, curr) => acc + curr, 0));
