//JavaScript Variable Scope

// Scope refers to the availability of variables and functions in certain parts of the code.
// In JavaScript, a variable has two types of scope:
    // Global Scope
    // Local Scope

//Global Scope - A variable declared at the top of a program or outside of a function is considered a global scope variable.

// program to print a text 
let a = "Javascript";
function say () {
    console.log(a);
}
say(); // Javascript

// In the above program, variable a is declared at the top of a program and is a global variable. It means the variable a can be used anywhere in the program.


//The value of a global variable can be changed inside a function

let name = "Denis";
function changeName () {
    name = "Danut"
}
console.log(name); // Denis
changeName();
console.log(name); // Danut

//In the above program, variable a is a global variable. The value of a is hello. Then the variable a is accessed inside a function and the value changes to 3.


//Local Scope -  it can only be accessed within a function.

let x = 2;
function sum() {
    let y = 3;
    console.log(x + y); // 5
}
sum();
console.log(x + y); // error: y is not defined
//  In the above program, variable a is a global variable and variable b is a local variable.
//  The variable b can be accessed only inside the function greet.
//  When we try to access variable b outside of the function, an error occurs.