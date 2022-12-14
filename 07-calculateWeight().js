/*
Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. 
Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

Write a function, calculateWeight(). It should:

have two parameters: earthWeight and planet
expect earthWeight to be a number
expect planet to be a string
return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
*/

const calculateWeight = (earthWeight, planet) => {
  // SWITCH METHOD  - CHECKED / WORKING
  switch (planet) {
    case "Mercury":
      return earthWeight * 0.378;
    case "Venus":
      return earthWeight * 0.907;
    case "Mars":
      return earthWeight * 0.377;
    case "Jupiter":
      return earthWeight * 2.36;
    case "Saturn":
      return earthWeight * 0.916;
    default:
      return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }

  //   IF/ELSE STATEMENT - CHECKED / WORKING
  //   if (planet === 'Mercury') {
  //     return earthWeight * 0.378;
  //   } else if (planet === 'Venus') {
  //     return earthWeight * 0.907;
  //   } else if (planet === 'Mars') {
  //     return earthWeight * 0.377;
  //   } else if (planet === 'Jupiter') {
  //     return earthWeight * 2.36;
  //   } else if (planet === 'Saturn') {
  //     return earthWeight * 0.916;
  //   } else return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
};

console.log(calculateWeight(120, "Mercury")); // prints 45.36
console.log(calculateWeight(80, "Jupiter")); // prints 188.79999999999998
console.log(calculateWeight(80, "Jupiter").toFixed(2)); // prints 188.80  // .toFixed() METHOD SPECIFIES NUMBER OF DECIMAL PLACES
console.log(calculateWeight(200, "Mars")); // prints 75.4
console.log(calculateWeight(1000, "Pluto")); // prints Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.
