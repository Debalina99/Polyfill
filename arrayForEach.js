Array.prototype.myForEach = function (callback) {
  let inputArr = this;

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr.hasOwnProperty(i)) {
      callback(inputArr[i], i, inputArr);
    }
  }
};

const arr = [2, 4, 8, 12];

arr.myForEach((x, i, array) => {
    console.log(`Element: ${x}, Index: ${i}, Array: ${array}`);
  });