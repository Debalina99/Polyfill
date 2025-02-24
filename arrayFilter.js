Array.prototype.myFilter = function (callback) {
    let inputArr = this;
    let res=[];
    for (let i = 0; i < inputArr.length; i++) {
      if(callback(inputArr[i], i, inputArr)){
        res.push(inputArr[i]);
      }
    }
    return res;
  };
  
  const arr = [2, 4, 8, 12];
  console.log(arr.myFilter((x) => x > 2));