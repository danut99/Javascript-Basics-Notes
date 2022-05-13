// String Concatenation

//The + Operator
//The same + operator you use for adding two numbers can be used to concatenate two strings.
const string = 'Hello' + ' ' + 'World';
console.log(string);

//You can also use +=, where a += b is a shorthand for a = a + b.
let string1 = 'Hello';
string1 += ' ';
string1 += 'Danut';
console.log(string1);

//String#concat()
//The concat() method concatenates given arguments to the given string.
//Syntax of concat() - > str.concat(str1, ..., strN)

let firstName = "Boca";
let lastName = "Danut";

// concatenating two strings
let fullName = firstName.concat(" ", lastName);
console.log(fullName); // Hello, World!


// Template Literals
//allow you to use strings or embedded expressions in a string. They are enclosed in backticks ``

const name = 'Danut';
console.log(`Hello ${name}!`); // Hello Danut!