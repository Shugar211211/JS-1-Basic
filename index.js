// JavaScript code
console.log('Hello World !');

// Variables: let / var

// before ES6 - var
// ES6 - let
let firstName = 'Mosh';
let lastName = 'Hamedani';
console.log(firstName, lastName);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

// Constants: const

// If there's no need to reassign, const should be a default choice over let
const interestRate = 0.3;
console.log(interestRate);

// Primitive / value types:
// String, Number, Boolean, undefined, null
let someName = 'Mosh'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let someUndefineName; // Undefined is a type and a value; can be explicitly set: let someUndefinedName = undefined;
let selectedColor = null // Null

// Reference types:
// Objects, Arrays, Functions

// Object
let someObject = {} // Curly braces define object literal

let person = {
    personName: 'Mosh',
    peronAge: 30
};
console.log(person);

// Dot notation
person.personName = 'John';
console.log(person.personName);

// Bracket notation
let selection = 'personName';
person[selection] = 'Mary';
console.log(person['personName']);

// Array - datastructure, used to represent a list of items
let someArray = []; // Square brackets define array literal

let colors =['red', 'blue'];
console.log(colors);

// Length of array is dynamic, elements may be addad to array.
colors[2] = 'green';
console.log(colors);
console.log(colors[0]);
// Types of elements in array are dynamic, elements of all types may be added to array
colors[3] = 15;
console.log(colors);
console.log(colors.length);

// Function - set of statements to perform an action or calculate and return a value
// Everithihg within curly braces referred as body of function.
// someName is a paramater of the function
function greet(someName1, someName2) {
    console.log('Hello ' + someName1 + someName2);
}

greet('John','Smith'); // firstName is an argument of the function
greet('Mary ');

function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);

console.log(square(5));