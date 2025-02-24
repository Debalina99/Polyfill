Array.prototype.myMap = function (callback) {
  let inputArr = this;
  let res = [];
  for (let i = 0; i < inputArr.length; i++) {
    res.push(callback(inputArr[i], i, inputArr));
  }
  return res;
};

const arr = [2, 4, 8, 12];
console.log(arr.myMap((x) => x * 2));