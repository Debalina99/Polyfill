Array.prototype.myPop = function () {
    let inputArr = this;
    let len = inputArr.length;
    if (len === 0) return undefined; 

    let removedElement = inputArr[len - 1]; 
    delete inputArr[len - 1]; 
    this.length = len - 1; 

    return removedElement;
  };
  
  const arr = [2, 4, 8, 12];
  console.log(arr.myPop());
  console.log(arr);