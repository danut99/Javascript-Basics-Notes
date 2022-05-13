// CONST
//With const you can define unchanging variables (constants).

const number = 10;
console.log(number);

//Once a constant is initialized, we cannot change its value
const y = 2;
y = 4;
console.log(y) // Error! constant cannot be changed.

//LET
//Let will only be used within the scope of where you declared that

let x = 5; 
console.log(x);//displays the value of x
//change the value of x
x = 6;
console.log(x);//should display 6

//with let you can declare a variable without initializing it

let z; // declaration
z = 1; // initialization
console.log(z); //should displays 1