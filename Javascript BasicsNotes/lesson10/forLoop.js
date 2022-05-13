// For Loop
// loops are used to repeat a block of code.



//JavaScript for loop

/* Syntax
for (initialExpression; condition; updateExpression) {
    // for loop body
}
The initialExpression initializes and/or declares variables and executes only once.
The condition is evaluated.
    If the condition is false, the for loop is terminated.
    If the condition is true, the block of code inside of the for loop is executed.
The updateExpression updates the value of initialExpression when the condition is true.
The condition is evaluated again. This process continues until the condition is false.

*/

// program to display text 5 times
const n = 5;
// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`Hello`);
}

/*
n=5
Iteration	Variable	Condition: i <= n	                Action
1st	        i = 1       	true	            Hello is printed. i is increased to 2.
2nd	        i = 2           true                Hello is printed. i is increased to 3.
3rd	        i = 3       	true	            Hello is printed. i is increased to 4.
4nd	        i = 4           true                Hello is printed. i is increased to 5.
6nd	        i = 5           true                Hello is printed. i is increased to 6.
4nd	        i = 6           false               The loop is terminated.

*/


// program to display the sum of natural numbers
let sum = 0;
const numbers = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= numbers; i++) {
    sum += i;  // sum = sum + i
}
console.log('sum:', sum);

//JavaScript forEach()
//The forEach() method calls a function and iterates over the elements of an array.

/* Syntax
    array.forEach(function(currentValue, index, arr))

function(currentValue, index, arr) - a function to be run for each element of an array
currentValue - the value of an array
index (optional) - the index of the current element
arr (optional) - the array of the current elements

*/

let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}

//In the above program, the forEach() method takes myFunction() function that displays each element of a students array
//You can use the arrow function with the forEach() method to write a program
// with arrow function and callback

const students2 = ['John', 'Sara', 'Jack'];
students2.forEach(element => {
  console.log(element);
});