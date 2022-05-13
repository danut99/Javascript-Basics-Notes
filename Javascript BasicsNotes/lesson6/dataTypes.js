//DATA TYPES

//String	represents textual data
//Number	an integer or a floating-point number
//Boolean	Any of two values: true or false
//undefined	A data type whose variable is not initialized
//null	denotes a null value

//JavaScript String
//used to store text. In JavaScript, strings are surrounded by quotes: Single quotes, Double quotes, Backticks
//Backticks are generally used when you need to include variables or expressions into a string.

//strings example
const firstName = 'Danut';
const lastName = "Boca";
const result = `My name is ${firstName} and ${lastName}`;
console.log(result);

//JavaScript Number
//Number represents integer and floating numbers

const number1 = 2;
const number2 = 1;


//JavaScript Boolean
//represents logical entities. Boolean represents one of two values: true or false

const checked = true;
const counted = false;

//JavaScript undefined
//represents value that is not assigned
let name;
console.log(name); // undefined

//JavaScript null
//null is a special value that represents empty or unknown value

const total = null; //suggests that the total variable is empty.

//JavaScript typeof
//To find the type of a variable, you can use the typeof operator.
const city = 'Cluj';
console.log(typeof(city));// returns "string"

const number = 11;
console.log(typeof(number));//returns "number"

const valueChecked = true;
console.log(typeof(valueChecked));//returns "boolean"