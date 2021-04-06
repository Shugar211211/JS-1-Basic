// if...else condition:
// if(someCondition==true) {} 
// else if(anotherCondition){}
// else if(yetAnotherCondition) {}
// else {}

// switch...case, (===)
// let someVariable;
// switch(someVariable) {
//     case anotherVariable: console.log('do something');
//     break;
//     case anotherVariable: console.log('do something');
//     break;
//     default: console.log('do something');
// }

// for loop
// for(initialExpression; condition; incrementExpression) {}
for(let i=0; i<5; i++) { console.log(i); }

// While
let i=0;
while(i<5) { console.log(i); i++; }

// do-while loop
i=0;
do { console.log(i); i++; }
while(i<5);

// for...in - used to iterate over properties of object
const person = {
    firstName: 'Mosh',
    age: 30
};
for(let key in person) // in every iteration variable key is going to hold one property of person object 
{
    console.log(key);   // print key
    console.log(person[key]);   // print value
}

const colors = ['red', 'green', 'blue'];
for(let index in colors) {
    console.log(index); // print index (key)
    console.log(colors[index]); // print value at current index
}

// for...of - used to iterate over elements of array
for(let color of colors) {
    console.log(color); // print value
}

// break, continue

// Exercises:

// 1. This function takes two numbers and returns the maximum of the two.
function biggerNumber(num1, num2) {
    return num1>=num2 ? num1 : num2;
}

console.log(biggerNumber(5, 10));
console.log(biggerNumber(7, 3));
console.log(biggerNumber(8, 8));

// 2. This function takes two parameters: width and height,
// and returns 'landscape' if width is greater than height, 
// or 'portrait' if width is smaller than height.
function isLandscape(width, height) {
    return (width > height) ? ('landscape') : ('portrait'); 
}

console.log(isLandscape(1, 4));
console.log(isLandscape(6, 3));
console.log(isLandscape(2, 9));
console.log(isLandscape(8, 5));

// 3. fizzBuzz:
// if input divisible by 3 => output: fizz
// if input divisible by 5 => output: buzz
// if input divisible by 3 and 5 => output: FizzBuzz
// if input is not divisible by 3 and 5 => output: the same number
// if input is not a number => output: 'Not a number'
function fizzBuzz(input) {
    if(typeof input !== 'number') return 'NaN';
    // if(input%1!==0) return 'Not a number'; // another possible solution!
    else if(input%15===0) return 'FizzBuzz';
    else if(input%3===0) return 'Fizz';
    else if(input%5===0) return 'Buzz';
    else return input;

}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(17));
console.log(fizzBuzz('Hello'));

// 4. checkSpeed:
// Speed limit = 70kph. If input is < 70 => output: 'Ok'.
// Every 5kph above 70 -> adds 1 point.
// 12 points or more -> suspended licence
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if(speed<speedLimit+kmPerPoint) { return 'Ok';}
    const points = Math.floor((speed-speedLimit)/kmPerPoint);
    if(points>=12) {return 'Suspended licecnce';}
    else { return points };
}

console.log(checkSpeed(50));
console.log(checkSpeed(70));
console.log(checkSpeed(74));
console.log(checkSpeed(75));
console.log(checkSpeed(77));
console.log(checkSpeed(84));
console.log(checkSpeed(101));
console.log(checkSpeed(129));
console.log(checkSpeed(131));
console.log(checkSpeed(142));

// 5. even and odd numbers:
function showNumbers(limit) {
    for(let i = 0; i<=limit; i++) {
        console.log(i, i%2===0 ? 'even' : 'odd');
    }
}

showNumbers(10);

// 6. countTruthy:
// count number of truthy values in array.
const array = [0, null, NaN, undefined, '', 2, 3];

function countTruthy(array) {
    let truthyCounter = 0;
    for(let arrPosVal of array)
        if(arrPosVal) truthyCounter++;
    return truthyCounter;
}

console.log(countTruthy(array));

// 7. string properties:
// display properties of given object whuch are of type string
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}; 

function showProperties(obj) {
    for(let index in obj) 
        if(typeof(obj[index])==='string')
            console.log(index, obj[index]);
}

showProperties(movie);

// 8. sum of multiples of 3 and 5:
function sumOfMultiples(limit) {
    let countSum=0;

    for(let i=0; i<=limit; i++)
        if(i%3===0 || i%5===0) 
            countSum+=i;

    return countSum;
}

console.log(sumOfMultiples(10));
console.log(sumOfMultiples(15));

// 9. Calculate grade:
// Calculate average,
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks);

    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum=0;

    for(let val of array) 
        sum+=val;
    return sum/array.length;
}

// 10. Show stars:
showStars(7);

function showStars(rows) {
    for(let i=1; i<=rows; i++) {
        let str = '';
        for(let j=1; j<=i; j++)
            str+='*';
        console.log(str);
    }
}

// 11. Show prime numbers:
showPrimes(20);

function showPrimes(limit) {
    for(let i=2; i<=limit; i++) {
        if(isPrime(i)) 
            console.log(i);
    }
}

function isPrime(number) {
    for(let i=2; i<number; i++)
        if(number%i===0) 
            return false;
    return true;
}