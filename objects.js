/*
Object - collection of key-value pairs.
Objects are used to group (encapsulate) properties that are highly related.
Object properties can be any type - variable of any type, array, function, another object ...
Method - function that is part of object.
*/

/*
Object notation:
const/let [object-name] = {
	key: value,
	key: value,
	key: value
};
*/

// Object definition example:
const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1
	},
	isVisible: true,
	draw: function() { console.log('draw'); },
	move: function() { console.log('move'); }
};

circle.draw();  // calling method of the object

/*
Factory function - function that creates object.
*/

// Factory function (uses camelCase notation):
function createCircle(radius) {
    return {
        // radius: radius, - if key and value are the same, it may be written as follows
        radius,

        // method definition
        draw() { 
            console.log('draw'); 
        },
    };
}

const circle1 = createCircle(1);    // creating object
console.log(circle1);
circle1.draw();                     // calling method of the object
const circle2 = createCircle(2);
console.log(circle2);

/*
Constructor function - function that creates object.
*/

// Constructor function (uses Pascal notation):
function Circle(radius) {
    this.radius = radius;   // adding new properties to empty object
    this.draw = function() {
        console.log('draw');
    }
}

// 'new' operator creates empty object (const x = {};),
// 'this' is set to point to this new object,
// 'new' operator returns newly created object 
// from constructor function.

const circle3 = new Circle(1);

/*
Objects are dynamic - object properties can be added or removed at any time.
*/

// 'const' - means that the variable cannot be reassigned to the new variable,
// but the object can be changed.
const circle4 = {
    radius: 1
};

// Adding new properties to object:
circle4.color = 'yellow';
circle4.draw = function() {}

// Deleting property (member) from object:
delete circle4.color;
delete circle4.draw;

console.log(circle4);

/*
Every object has property called constructor, and it references to function that was used to create that object.
https://stackoverflow.com/questions/8698726/constructor-function-vs-factory-functions
*/

// circle object that was created with factory function
circle5 = new Circle(5);
console.log(circle5);

// circle object that was created with constructor
circle6 = createCircle(6);
console.log(circle6);

// Constructor property is called when object is created:
let x = {}; // is translated to: let x = new Object();
let s = 'some string'; // is translated to: let s = new String('some string');
let b = true; // is translated to: let b = new Boolean(true);

/*
Functions are objects. 

https://www.dofactory.com/javascript/function-objects

When we declare new function by runnung 'function' operator, 
java engine runs built-in constructor 'Function()'
*/

function CircleF(radius) {
    this.radius=radius;
    this.draw=function() { console.log('draw'); }
}

const Circle7 = new Function('radius', `
    this.radius=radius;
    this.draw=function() { console.log('draw'); }
`);

/*
There are some methods that are available in functions.
'call' calls a function.
First argumrnt specifies the target of this.
In the code below 'this' references empty object 
passed as parameter, then go explicit arguments.
*/
Circle7.call({}, 10);
// these two line are identical
const circle8 = new Circle7(10);

/*
If 'new' operator is not used, 'this' will point 
to the global object, which is window object
*/
const circle9 = Circle(10);
// these two line are identical
Circle7.call(window, 10);

/*
'apply' method is the same as 'call' method, except that
it receives array instead of second argument.
*/
Circle7.apply({}, [10]);

/*
Two categories of types in JavaScript:
- value types, or primitive types:
    -- Number
    -- String
    -- Boolean
    -- Symbol
    -- undefined
    -- null
- reperence types:
    -- Object
    -- Function
    -- Array

Functions and arrays are also objects.
Primitives are copied by their value, 
Objects are copied by their reference.
*/

// Primitive types:
let x2 = 10;
let y2 = x2;
// x2 and y2 are independent variables
x2 = 20;
// still y2==10

// Objects:
let x1 = { value: 10 };
let y1 = x1;
// x1 and y1 are pointing to the same object in memory
x1.value = 20;
// y2.value == 20 !

// 'number' variable outside of function is different 
// from 'number' inside inside of function.
let number = 10;

function increase(number) {
    number++;
}

increase(number);

// Objects are passed by reference.
// 'value' outside an d inside of function is the same variable.
let obj = { value: 10 }

function increase1(obj) {
    obj.value++;
}

increase1(obj);

/*
Object is not iterable.
 */
const circle10 = {
    radius: 1,
    draw() { console.log('draw'); }
};

// for...in -> iterate over properties (and methods) of an object
for(let key in circle10) { 
    console.log(key, circle10[key]); 
}

// for...of loop can only be used with iterables like arrays or maps
// this will cause error: object is not iterable 
// for(let key of circle10) {
//     console.log(key);
// }

// This returns string array of keys of properties of object
Object.keys(circle10);
// Arrays are iterable, so for...of can iterate 
// over array of properties of object.
// The following is valid:
for(let key of Object.keys(circle10)) {
    console.log(key);
}

// This returns each key-value pair as array
Object.entries(circle10);
// Iterating over key-value pairs that are properties of object
for(let entry of Object.entries(circle10)) {
    console.log(entry);
}

// Checking if an object has given property or method with 'in' operator:
if('radius' in circle10) {
    console.log('yeas');
}

/*
Cloning an object.
*/

// Cloning an object by coping all its properties with for loop:
const circle10clone = {}
for(let key in circle10)
    circle10clone[key] = circle[key];
// The same can be done with 'assing()' method of an object
// first argument of 'assign()' is target object, second is source object 
const circle10clone2 = Object.assign({}, circle10);
// the same as above and adding a new property to target object
const circle10clone3 = Object.assign({color: 'yellow'}, circle10);
// Cloning object can be done with spread operator too.
// The spread operator takes all the properties and methods of an object, 
// and puts then in between the curly braces.
// This is the simplest way to clone an object.
const circle10clone4 = { ...circle10 };

/*
Math.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/*
String.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
There are two kind of strings in JavaScript: string primitive and string object.
*/

// String primitive:
const str1 = 'This is my first message';
// String object:
const str2 = new String('hi');

console.log(typeof(str1)); // string
console.log(typeof(str2)); // object

// When using dot notation with primitive type string,
// JS wraps it in object, so we can work with it
// like with string object.

/*
Template liretals: ``.

Object literals: {}
Boolean literals: true / false
String literals: '' / ""
Template literals: ``
*/

const str3 = 
`This is my 
'first' message`;
// No need in escape characters and line break characters.

console.log(str1);
console.log(str3);

// Back ticks (``) allow adding placeholders (${})
// Any expression that produces a value may be put in between curly braces.
// Any function that returns a value may be put in between curly braces.
const firstName = 'John';
const message = `Hi ${firstName}, Have a nice ${4 + 3} days !`;
console.log(message);

/*
Date.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

// Using constructor without parameters returns current date and time. 
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);
// Date object has a lot os getters and setters.

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // commonly used in web apps to transfer date between client and the server