const person1 = {
  name: "Deb",
};
function printAge(age) {
  console.log(`${this.name} is ${age} years old!`);
}

Function.prototype.myCall = function (obj = {}, ...args) {
//   console.log(this);
 if(typeof this !== "function"){
    throw new Error("Not a function!");
 }
 obj.func=this;
 obj.func(...args);
};

// printAge.call(person1,25);
printAge.myCall(person1, 25);
