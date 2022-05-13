/*
JavaScript Operators
an operator is a special symbol used to perform operations on operands
JavaScript Operator Types:
    Assignment Operators
    Arithmetic Operators
    Comparison Operators
    Logical Operators
*/


/* 
    JavaScript Arithmetic Operators
    used to perform arithmetic calculations.
  
    +	Addition	x + y
    -	Subtraction	x - y
    *	Multiplication	x * y
    /	Division	x / y
    %	Remainder	x % y
    ++	Increment (increments by 1)	++x or x++
    --	Decrement (decrements by 1)	--x or x--
    **	Exponentiation (Power)	x ** y
*/
let x = 8;
let y = 2;

// addition
console.log('x + y = ', x + y);  // 10

// subtraction
console.log('x - y = ', x - y);  // 6

// multiplication
console.log('x * y = ', x * y);  // 16

// division
console.log('x / y = ', x / y);  // 4

// remainder
console.log('x % y = ', x % y);   // 0

// increment
console.log('++x = ', ++x); // x is now 9
console.log('x++ = ', x++); // prints 9 and then increased to 10
console.log('x = ', x);     // 10

// decrement
console.log('--x = ', --x); // x is now 9
console.log('x-- = ', x--); // prints 9 and then decreased to 8
console.log('x = ', x);     // 8

//exponentiation
console.log('x ** y =', x ** y);

//JavaScript Assignment Operators
//used to assign values to variables
// = -> Assignment operator
const number = 1;
// += -> Addition assignment
let a = 2;
a = a + 2
console.log(a);
a += 2 ;
console.log(a);
// -=	Subtraction Assignment
let b = 10;
b = b - 5
console.log(b);
b -= 5 ;
console.log(b)
// *=	Multiplication Assignment
let c = 3;
c = c * 2;
console.log(c);
c *= 2;
console.log(c);

// /=	Division Assignment
let d = 6;
d = d / 2;
console.log(d);
d /= 2;
console.log(d);

// %=	Remainder Assignment
let e = 5;
e = e % 2;
console.log(e);
e %= 2;
console.log(e);

// **=	Exponentiation Assignment
let f = 2;
f = f ** 2;
console.log(f);
f **= 2;
console.log(f);

/*JavaScript Comparison Operators
compare two values and return a boolean value, either true or false

    ==  	Equal to: returns true if the operands are equal
    !=  	Not equal to: returns true if the operands are not equal
    === 	Strict equal to: true if the operands are equal and of the same type
    !== 	Strict not equal to: true if the operands are equal but of different type or not equal at all
    >	    Greater than: true if left operand is greater than the right operand
    >=  	Greater than or equal to: true if left operand is greater than or equal to the right operand
    <	    Less than: true if the left operand is less than the right operand
    <=  	Less than or equal to: true if the left operand is less than or equal to the right operand

*/

// equal operator
console.log(1 == 1); // true
console.log(1 == '1'); // true

// not equal operator
console.log(3 != 1); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false

// Greater than
console.log(2 > 1); // true
console.log(2 > 3); // false

// Greater than
console.log(2 >= 2); // true
console.log(2 >= 1); // false

// Less than:
console.log(2 < 3); // true
console.log(3 < 3); // false

// Less than:
console.log(3 <= 3); // true
console.log(3 <= 2); // false

/*
JavaScript Logical Operators
perform logical operations and return a boolean value, either true or false
    &&  Logical AND: true if both the operands are true, else returns false x && y
    ||  Logical OR: true if either of the operands is true; returns false if both are false x || y
    !   Logical NOT: true if the operand is false and vice-versa.   !x
*/

// logical AND
console.log(true && true); // true
console.log(true && false); // false
// logical OR
console.log(true || false); // true
// logical NOT
console.log(!true); // false