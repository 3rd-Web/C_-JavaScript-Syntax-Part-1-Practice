/*
Write a function, sillySentence(), that has 3 string parameters and returns the following 
silly sentence with the blanks filled in by the arguments passed into the function:
*/

const sillySentence = (adjective, verb, noun) => {
    return 'I am so ' + adjective + ' because I ' + verb + ' coding! Time to write smoe more awesome ' + noun + '!';
}

console.log(sillySentence('excited', 'love', 'functions')); // prints I am so excited because I love coding! Time to write smoe more awesome functions!