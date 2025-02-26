const person1 = {
  name: "Deb",
};
function printAge(age, year) {
  console.log(`${this.name} is ${age} years old, year: ${year}!`);
}

Function.prototype.myBind = function (obj = {}, ...args1) {
  //   console.log(this);
  if (typeof this !== "function") {
    throw new Error("Not a function!");
  }
  obj.func = this;
  return function (...args2) {
    obj.func(...args1, ...args2);
  };
};

let newFunc= printAge.myBind(person1,25);
newFunc(1999);