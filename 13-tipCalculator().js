/*
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%
*/

const tipCalculator = (quality, cost) => {
  // IF / ELSE STATEMENT // *** WORKING ***

  // if (quality === 'bad') {
  //     return cost * .05;
  // } else if (quality === 'ok') {
  //     return cost * .15;
  // } else if (quality === 'good') {
  //     return cost * .20;
  // } else if (quality === 'excellent') {
  //     return cost * .30;
  // } else return cost * .18;

  //   SWITCH METHOD

  switch (quality) {
    case "bad":
      return cost * 0.05;
    case "ok":
      return cost * 0.15;
    case "good":
      return cost * 0.2;
    case "excellent":
      return cost * 0.3;
    default:
      return cost * 0.18;
      break;
  }
};

console.log(tipCalculator("bad", 125)); // prints 6.25
console.log(tipCalculator("ok", 55)); // prints 8.25
console.log(tipCalculator("better than ok", 55)); // prints 9.9
