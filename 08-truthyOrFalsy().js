/*
It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), 
that takes in any value and returns true if that value is truthy and false if that value is falsy.
*/

const truthyOrFalsy = (value) => {
  if (value) {
    return true;
  }
  return false;
};

console.log(truthyOrFalsy(3743835735)); // prints true
console.log(truthyOrFalsy()); // prints false