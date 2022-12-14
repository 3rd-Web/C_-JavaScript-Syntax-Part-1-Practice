/*
Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'
*/

const lifePhase = (age) => {
  
  if (age >= 0 && age <= 3) {
    return "baby";
  }
  if (age >= 4 && age <= 12) {
    return "child";
  }
  if (age >= 13 && age <= 19) {
    return "teen";
  }
  if (age >= 20 && age <= 64) {
    return "adult";
  }
  if (age >= 65 && age <= 140) {
    return "senior citizen";
  }
  if (age < 0 || age > 140) {
    return "This is not a valid age";
  }
};

console.log(lifePhase(40)); // prints adult
console.log(lifePhase(7)); // prints child
console.log(lifePhase(140)); // prints senior citizen
console.log(lifePhase(141)); // prints This is not a valid age
