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

// Arithmetic operators
let x=10;
let y=3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); // Mod operator
console.log(x ** y); // Exponenciation operator (x^y)

// Increment (++)
console.log(++x);
console.log(x++);

// Decrement operator (--)
console.log(--x);
console.log(x--);

let v = 1;
// Relational operators
console.log(v > 0);
console.log(v < 0);
console.log(v >= 0);
console.log(v <= 0);
// Equality operators
console.log(v === 1);
console.log(v !== 1);

// Equality operators:
// Strict (type + value)
console.log(1 === 1);
console.log('1' === 1);
// Loose (type on the right side gets converted to type on the left side)
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

// Ternary operator:
// If a customer has more than 100 points, they are a 'gold' customer, 
// otherwise, they are a 'silver' customer.
let points = 70;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

// Logical operators: 
// AND (&&)
// OR (||)
// NOT (!)

// Logical operators with non-boolean values: falsy VS trusy.
// Falsy treated is boolean false, truthy treated as boolean truth.
// Non-boolean value is returned in case of non-boolean operand values.

// Falsy non-boolean values: 
//  undefined, 
//  null, 
//  0, 
//  false, 
//  '', 
//  NaN
// Anything that is non Falthy -> Truthy

// false || true returns true
// false || 'Mosh' returns "Mosh"
// false || 1 returns 1

// Evaluations starts from left to right. As soon as Truthy operand found, 
// it is returned, and evaluations stops.
// This is called Short-circuiting.
// false || 1 || 2 returns 1

// It is a good way to provide default values.

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

userColor = undefined;
defaultColor = 'blue';
currentColor = userColor || defaultColor;
console.log(currentColor);

// Bitwise operators:
// 1 = 00000001
// 2 = 00000010
// R = 00000011 = 3
console.log(1 | 2); // Bitwise OR

// 1 = 00000001
// 2 = 00000010
// R = 00000000 = 0
console.log(1 & 2); // Bitwise AND

// Exercise: Swapping variables
let a = 'red';
let b = 'blue';
let c = a;
console.log(a);
console.log(b);
a=b;
b=c;
console.log(a);
console.log(b);