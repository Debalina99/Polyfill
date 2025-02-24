Array.prototype.myInclude = function (val) {
  let inputArr = this;

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === val || (Number.isNaN(inputArr[i]) && Number.isNaN(val))) {
      return true;
    }
  }
  return false;
};

const arr = [2, 4, 8, 12, NaN];
console.log(arr.myInclude(1)); // Output: false
console.log(arr.myInclude(8)); // Output: true
console.log(arr.myInclude(NaN)); // Output: true
