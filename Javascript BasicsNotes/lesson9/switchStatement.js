//JavaScript Switch Statement
//The JavaScript switch statement is used in decision making.
//The switch statement evaluates an expression and executes the corresponding body that matches the expression's result.

/* Syntax
switch(variable/expression) {
    case value1:  
        // body of case 1
        break;

    case value2:  
        // body of case 2
        break;

    case valueN:
        // body of case N
        break;

    default:
        // body of default
}
The switch statement evaluates a variable/expression inside parentheses ().
    If the result of the expression is equal to value1, its body is executed.
    If the result of the expression is equal to value2, its body is executed.
    This process goes on. If there is no matching case, the default body executes.

*/

// program using switch statement
let name = 'Danut';
switch (name) {

    case 'Denis':
        fullName = `${name} Bodea `;
        break;
    case 'Danut':
        fullName = `${name} Boca `;
        break;
    default:
        name = 'not found';
        break;
}
console.log(` ${fullName}`);