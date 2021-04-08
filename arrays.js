// const array can not be reassgned, but it can be modified.
// Elements can be added or deleted,their values can be changed.
const numbers = [3, 4];

// Adding new elements to the end of array:
numbers.push(5, 6);

// Adding new elements to the beginning of array:
numbers.unshift(1, 2);

// Adding new elements 'a', 'b' at the position 2 of the array
numbers.splice(2, 0, 'a', 'b');

// Finding certain element in array of primitive type
const numbers2 = [1, 2, 3, 4, 1];
console.log(numbers2.indexOf('a')); // returns -1
console.log(numbers2.indexOf(2)); // returns 1
console.log(numbers2.indexOf('1')); // returns -1, type matters
console.log(numbers2.lastIndexOf(1)); // returns 4
console.log(numbers2.indexOf(1) !== -1); // returns true (boolean)
console.log(numbers2.includes(1)); // returns true (boolean), same as above
// All thehe methods have optional second parameter - starting index

// Finding certain element in array of reference type
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const courses = [
    {id: 1, courseName: 'a' },
    {id: 2, courseName: 'b' },
    {id: 3, courseName: 'c' }
];

const course = courses.find(function(course) {
    return course.courseName === 'a';
});
console.log(course);

const course2 = courses.find(function(course) {
    return course.courseName === 'd';
});
console.log(course2);

const course3 = courses.findIndex(function(course) {
    return course.courseName === 'b';
});
console.log(course3);

const course4 = courses.findIndex(function(course) {
    return course.courseName === 'e';
});
console.log(course4);

/* Arrow functions. */

// Arrow function syntax can be used when function is passed as argument to another function.
// this means removing keyword 'function' and putting fat arrow between parameters and body.
const course5 = courses.findIndex((course) => {
    return course.courseName === 'b';
});

// If function has only one parameter, the parentheses can be removed.
const course6 = courses.findIndex(course => {
    return course.courseName === 'b';
});

// If function has no partameters, there will be only parentheses.
const course7 = courses.findIndex(() => {
    return course.courseName === 'b';
});

// If function has only one line of code, and returns a value, 
// keyword 'return' and curly braces can be removed, 
// and everything put in one line.
const course8 = courses.findIndex(course => course.courseName === 'b'); 

/* Removing elements from array. */

// Remove last element from array:
const last = numbers.pop();
console.log(numbers);
// method 'pop()' removes and returns last element of array
console.log(last);

// Remove first element from array:
const first = numbers.shift();
console.log(numbers);
// method 'shift()' removes and returns first element of array
console.log(first);

// Remove 2 elements from array starting from index 3:
const someElement = numbers.splice(3, 2);
console.log(numbers);
// method 'splice()' removes and returns removed elements
console.log(someElement);

/* Emptying an array. */

// Solution 1: if array declared as 'let', it can be reassigned to new array.
let numbers3 =[1, 2, 3];
numbers3 = [];
// If there are other references exist, that point to original array, it will still exist,
// otherwise, it will be deleted by garbage collector.

// Solution 2: set 'length' property to 0.
numbers3.length = 0;

// Solution 3: 'splice()' method.
numbers3.splice(0, numbers3.length);

// Solution 4: using 'pop()' method in loop.
while(numbers3.length > 0)
    numbers3.pop();

/* Combinig and slicing arrays. */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// To combine 2 arrays use 'concat()' method.
const combined = arr1.concat(arr2);
console.log(combined);

// To slice array to two arrays use 'slice()' method.
const sliced = combined.slice(2,4); // returns 4 elements from index 2 of original array
const sliced2 = combined.slice(2); // returns rest of original array from index 2
const sliced3 = combined.slice(); // copies the original array
console.log(sliced);
console.log(sliced2);
console.log(sliced3);
console.log(combined);

// In case of arrays with primitive values, the values are copied,
// in case of objects, only their references are copied, so
// the elements of input and output arrays will point to the same objects.

// Combining arrays with spread operator.
const combined2 = [...arr1, ...arr2];
console.log(combined2);

// Additional elements can be added while combining.
const combined3 = [...arr1, 'a', ...arr2, 'b'];
console.log(combined3);

// Copying array with spread operator
const combined4 = [...combined3];

// Iterating an array with for...of loop.
for(let number of numbers) 
    console.log(number);

// Iterating an array with 'forEach()' method.
// 'forEach()' method executes the function for each element in the array,
// means, eash element of the array will pass as argument to the function.
numbers.forEach(function(number) {console.log(number);});
// The same code as above implemented with arrow function syntax:
numbers.forEach( number => console.log(number) );
// Method 'forEach()' accepts optional second parameter, which is index.
numbers.forEach( (number, index) => console.log(index, number) );

// Joining arrays.
const joined = numbers.join(',');
console.log(joined);

// Splitting string to array.
const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

// Joining array of string.
const combined5 = parts.join('-');
console.log(combined5);

// Sorting array of primitive type.
const numbers4 = [4, 3, 5, 2, 1];
numbers.sort();
console.log(numbers4);

// Sorting array of primitive type in reversed order.
numbers4.reverse();
console.log(numbers4);

// Sorting array of objects.
const courses1 = [
    {id: 2, name: 'Node.js'},
    {id: 1, name: 'JavaScript 1'},
    {id: 4, name: 'Angular'},
    {id: 3, name: 'TypeScript 2'}
];

courses1.sort(function(a, b) {
    // a<b => -1
    // a>b => 1
    // a===b => 0

    const nameA = a.name.toLocaleUpperCase();
    const nameB = b.name.toLocaleUpperCase();

    if(nameA<nameB) return -1;
    if(nameA>nameB) return 1;
    else return 0;
});

console.log(courses1);

/* Testing the elements of array for positive / negative values. */

const numbers5 =[-9, 0, -4, 5, 6, 7, -8, 11];

// The function runs on every element of the array.
// As soon as it find ONE NEGATIVE value, it returns false and terminates.
const allPositive = numbers5.every(function(value) {
    return value >= 0;
});

console.log(allPositive);

// The function runs on every element of the array.
// As soon as it find ONE POSITIVE value, it returns true and terminates.
const atLeastOnePositive = numbers5.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive);

/* Filtering an array. */

// The funation runs on every element of the array.
// If the element matches the criteria in the body of the function, 
// the funation adds the element to new array.
const filtreredArray = numbers5.filter(function(value) {
    return value >= 0;
});

console.log(filtreredArray);

// The same as above, implemented with arrow function.
const filtreredArray2 = numbers5.filter(value => value >= 0 );

console.log(filtreredArray2);

/* Mapping an array. */

// 'map()' method maps each element of array to something else.

// Mapping array elements to strings:
const items = filtreredArray.map(number => '<li>' + number + '</li>')
console.log(items);
const html = '<ul>' + items.join('') + '</ul>'; // if no separator is provided, coma is used by default
console.log(html);

// Mapping array elements to objects:
const items2 = filtreredArray.map(number => {
    const obj = {value: number};
    return obj;
});
console.log(items2);

// Same as above, optimized:
const items3 = filtreredArray.map(number => obj = {value: number});
console.log(items3);

// Same as above, optimized:
const items4 = filtreredArray.map(number => ({value: number}) );
// parentheses are here to prevent js engine perceive curly braces as code block
console.log(items4);

// Methods like 'map()' and 'filter()' return new array, 
// but they don't change original array - they are chainable.
const items5 = numbers5
    .filter(number => number >= 0)
    .map(number => ({value: number}) );

/* Reducing array. */

// Calculating sum of all elements of array - conventional way.
const numbers6 = [1, -1, 2, 3];
let sum=0;
for(let n of numbers6)
    sum+=n;

// Calculating sum of all elements of array using 'reduce()' method.
// 'reduce()' is run on each element of array, 
// Each run 'currentValue' is set to current element of array.
// Each tun 'currentValue' is added to 'accumuilator'.
// First argument of 'reduce()' method is callback function.
// Second argument of 'reduce()' method is 0, to set accumulator to 0 (initial value of 'accumulator').
// If initialization of 'accumulator' is not provided, 'accumulator' is set to the first element.
const sum2 = numbers6.reduce( (accumulator, currentValue) => accumulator+ currentValue , 0);
console.log(sum2);