//Functions
//A function is a block of code that performs a specific task.


/* Syntax
    function myFunction () {
        // function body   
    }
    A function is declared using the function keyword.
*/

// declaring a function named sayHello()
function sayHello () {
    console.log("Hello");  
}

// function call
sayHello();

//Function Parameters
//A parameter is a value that is passed when declaring a function.

function sayHi (name) {
    console.log(`Hi ${name}`);  
}
let name = "Danut";
sayHi(name);

//Function Return
//The return statement can be used to return the value to a function call.
//The return statement denotes that the function has ended. Any code after return is not executed.

// program to add two numbers
// declaring a function
function sum(a, b) {
    return a + b;
}
const result = sum(3,4);
// display the result
console.log("The sum is " + result);