// Javascript Objects
//JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.
/* Syntax
    const object_name = {
        key1: value1,
        key2: value2
    }
    an object object_name is defined.
    Each member of an object is a key: value pair separated by commas and enclosed in curly braces {}.

*/

// object creation
const person = { 
    name: 'Danut',
    age: 23
};
console.log(typeof person); // object

//or 
const person2 = { name: 'Denis', age: 22 };
//In the above example, name and age are keys, and John and 20 are values respectively.

//In JavaScript, "key: value" pairs are called properties. For example,

//Accessing Object Properties

//You can access the value of a property by using its key.

//1. Using dot Notation
// syntax:  objectName.key
const person3 = { 
    name: 'Danut',
    age: 23
};
// accessing property
console.log(person3.name); // Danut


//2. Using bracket Notation
// syntax:  objectName["propertyName"]
const person4 = { 
    name: 'Denis', 
    age: 22, 
};

// accessing property
console.log(person4["age"]); // 22