//JavaScript for...in loop
//The for..in loop in JavaScript allows you to iterate over all property keys of an object.

/* Syntax
    for (key in object) {
        // body of for...in
    }
*/

const person = { 
    name: 'Danut',
    age: 23
};
// using for...in
for ( let key in person ) {

    // display the properties
    console.log(`${key} => ${person[key]}`);
}
//The object key is assigned to the variable key.
// person[key] is used to access the value of key.

//JavaScript for...of loop
//The for..of loop in JavaScript allows you to iterate iterate over elements of an array.
/* Syntax
    for (variable of iterable) {
    // body of for...of
    }
*/
let scores = [80, 90, 70];

for (let score of scores) {
    score = score + 5;
    console.log(score);
}
//In this example, the for...of iterates over every element of the scores array.
// It assigns the element of the scores array to the variable score in each iteration.