Array.prototype.myPush = function () {
    let inputArr = this;
    let args=arguments;
    let len = inputArr.length;

    for (let i = 0; i < args.length; i++) {
        inputArr[len + i] = args[i];
    }
    return (this.length=len+args.length);
  };
  
  const arr = [2, 4, 8, 12];
  console.log(arr.myPush(15,20,"Hi"));
  console.log(arr);