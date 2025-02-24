let arr1 = [1, 2, 3, 4, [5, [6, 7]]];

Array.prototype.myFlat = function () {
  let resArr = [];
  function FlattenArr(arr1) {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        FlattenArr(arr1[i]);
      } else {
        resArr.push(arr1[i]);
      }
    }
    return resArr;
  }
  return FlattenArr(this);
};

console.log(arr1.myFlat());
console.log(arr1.flat(Infinity));
