// 1. Sum of arguments.
// Solution for separate args:
function sumOfArgs(...args) {
    return args.reduce( (a, b) => a + b );
}
console.log(sumOfArgs(10, 201, 300, 15));

// Solution for array:
function sumOfArgsArr(...args) {
    if(Array.isArray(args[0]) && args.length === 1)
        return args[0].reduce( (a, b) => a + b );
    else 
        return args.reduce( (a, b) => a + b );
}
console.log(sumOfArgsArr([1, 15, 46, 78]));

// Proposed solution:
function sumOfArgs2(...args) {
    if(Array.isArray(args[0]) && args.length === 1)
        args = [...args[0]];
    return args.reduce( (a, b) => a + b );
}
console.log(sumOfArgs2([1, 15, 46, 78]));

// 2. Area of a circle.
const circle = {
    radius: null,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};
circle.radius = 10;
console.log(circle.area);

// 3. Error handling.
const numbers = [6, 4, 4, 5, 6, 6, 8, 1, 1];
searchElement = 6;

function countOccurrences(numbers, searchElement) 
{
    if( ! Array.isArray(numbers) )
        throw new Error('Value is not an array.');
    return numbers.reduce( (accumulator, current) => { 
        const occurrence = (current === searchElement) ? 1 : 0
        return accumulator + occurrence;
    }, 0); 
}
try {
    const count = countOccurrences(numbers, searchElement);
    console.log(count);
    count = countOccurrences(235, searchElement);
    console.log(count);
}
catch(e) {
    console.log(e);
}