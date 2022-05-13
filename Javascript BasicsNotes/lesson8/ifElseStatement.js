//JavaScript if...else Statement
//In JavaScript, there are three forms of the if...else statement: if statement , if...else statement, if...else if...else statement



//JavaScript if Statement
/* Syntax
    if (condition) {
        // the body of if
    }

    -The if statement evaluates the condition inside the parenthesis ().
    -If the condition is evaluated to true, the code inside the body of if is executed.
    -If the condition is evaluated to false, the code inside the body of if is skipped.

*/

// check if the number is greater than 10

const number = 20;

// check if number is greater than 0
if (number > 10) {
 // the body of the if statement
  console.log("The number is greater than 10");
}


//JavaScript if...else statement
//An if statement can have an optional else clause

/* Syntax
    if (condition) {
        // block of code if condition is true
    } else {
    // block of code if condition is false
    }

If the condition is evaluated to true,
    the code inside the body of if is executed
    the code inside the body of else is skipped from execution

If the condition is evaluated to false,
    the code inside the body of else is executed
    the code inside the body of if is skipped from execution

*/

// check if the number is positive or negative/zero

const x = -2;

// check if number is greater than 0
if (x > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else {
  console.log("The number is either a negative number or 0");
}

//JavaScript if...else if statement
// if you need to make a choice between more than two alternatives, if...else if...else can be used.

/* Syntax
    if (condition1) {
        // code block 1
    } else if (condition2){
        // code block 2
    } else {
        // code block 3
    }

    If condition1 evaluates to true, the code block 1 is executed.
    If condition1 evaluates to false, then condition2 is evaluated.
        If the condition2 is true, the code block 2 is executed.
        If the condition2 is false, the code block 3 is executed.

*/


// check if the y is positive, negative or zero
const y = 0;
// check if y is greater than 0
if (y > 0) {
    console.log("y is positive");
}
// check if y is 0
else if (y == 0) {
  console.log("y is 0");
}
// if y is less than 0
else {
    console.log("y is negative");
}
