/*
Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'
*/

const finalGrade = (grade1, grade2, grade3) => {
  if (
    grade1 < 0 ||
    grade1 > 100 ||
    grade2 < 0 ||
    grade2 > 100 ||
    grade3 < 0 ||
    grade3 > 100
  ) {
    return "You have entered an invalid grade";
  }

  let avgGrade = (grade1 + grade2 + grade3) / 3;

  if (avgGrade < 60) {
    return "F";
  } else if (avgGrade < 70) {
    return "D";
  } else if (avgGrade < 80) {
    return "C";
  } else if (avgGrade < 90) {
    return "B";
  } else return "A";

};

console.log(finalGrade(60, 60, 40)); // prints F
console.log(finalGrade(70, 100, 100)); // prints A
console.log(finalGrade(70, 70, 70)); // prints C
console.log(finalGrade(60, 60, 140)); // prints You have entered an invalid grade