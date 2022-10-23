/*
The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.
*/

const canIVote = (age) => {
  if (age >= 18) {
    return true;
  } else return false;
};

console.log(canIVote(18)); // prints true
console.log(canIVote(17)); // prints false
