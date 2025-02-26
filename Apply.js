const person1 = {
    name: "Deb",
  };
  function printAge(age) {
    console.log(`${this.name} is ${age} years old!`);
  }
  Function.prototype.myApply = function (obj = {}, ...args) {
    //   console.log(this);
     if(typeof this !== "function"){
        throw new Error("Not a function!");
     }
     if(!Array.isArray(...args)){
        throw new Error("CreateListFromArrayLike called on non-object");
     }
     obj.func=this;
     obj.func(...args);
    };

// printAge.apply(person1,[25]);
printAge.myApply(person1, [25]);