/*
Write a function, agreeOrDisagree(), that takes in two strings, 
and returns 'You agree!' if the two strings are the same and 'You disagree!' 
if the two strings are different.
*/

const agreeOrDisagree = (agree1, agree2) => {
    if (agree1 === agree2) {
        return 'You agree!';
    } else return 'You disagree!'
};

console.log(agreeOrDisagree('yay', 'yay')); // prints You agree!
console.log(agreeOrDisagree('nah', 'yeah')); // prints You disagree!
