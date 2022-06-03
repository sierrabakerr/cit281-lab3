/*
    CIT 281 Lab 3
    Name: Sierra Baker
*/
// TODO Part 9: Add the reverseString function to the module.exports object
// for import using require()
module.exports = {
  reverseString,
  concatenateString(a){
    return a + a;
  }
};

// TODO Part 10: Add an anonymous function concatenateString that takes a string
// as a parameter, and returns the original concatenated to itself

/* example: module.exports = {};

module.exports = {
    greetings: this.function(a){
        return "greetings to" + a
    }
}*/

//this statement will export the function greetings() from theis module
//this will help on part 10

// TODO Part 8: Reference the following website to use the spread operator
// to reverse the string for reverseString(str) function. Comment out the
// original return line of code.
// https://betterprogramming.pub/5-ways-to-reverse-a-string-in-javascript-466f62845827

/*function reverse(str){
    return str.split("").reverse().join("");
}*/

function reverseString() {
  return [...str].reverse().join("");
}
