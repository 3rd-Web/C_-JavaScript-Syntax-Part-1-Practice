/*
Create a function isEven() that takes a number as its only parameter. 
The function should return true if the number is even and false if the number is odd.
*/

const isEven = (number) => {
    if (number % 2 == 0) {
        return true;
    } else return false;
}

console.log(isEven(5)) // prints false
console.log(isEven(10)) // prints true

