// 1. Array from range.
const numbers = arrayFromRange(-10, 4);

console.log(numbers);

function arrayFromRange(min, max) {
    const outputArray = [];
    for(let i = min; i <= max; i++)
        outputArray.push(i);
    return outputArray;
}

// 2. Includes implemented.
const arr1 = [1, 2, 3, 'a', 'b', 'c'];

function includes(array, searchElement) {
    for(let element of array)
        if(element === searchElement)
            return true;
    return false;
}

console.log(includes(arr1, 1));
console.log(includes(arr1, 4));
console.log(includes(arr1, 'a'));
console.log(includes(arr1, 'd'));

// 3. Except.
// The 'output' array contains the elements from first array 'numbers2', 
// that are not contained in second array.
const numbers2 = [1, 2, 3, 4, 1, 1];
const output1 = except(numbers2, [1, 2]);
console.log(output1);
const output2 = except2(numbers2, [1, 2]);
console.log(output2);

// First solution
function except(array, excluded) {
    const output = [];
    for(let element of array) {
        excludedElementFlag = false;
        for(let excludeElement of excluded)
            if(element === excludeElement) {
                excludedElementFlag = true;
                break;
            }
        if(!excludedElementFlag)
            output.push(element);
    }
    return output;
}

// Second solution
function except2(array, excluded) {
    const output = [];
    for(let element of array)
        if(excluded.indexOf(element) === -1)
            output.push(element);
    return output;
}

// 4. Moving an element.
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let output = move(numbers3, 4, -2);
console.log(output);
output = move(numbers3, 9, -2);
console.log(output);

function move(array, index, offset) {
    if(index<0 || index>array.length-1) {
        console.error('Invalid index');
        return 'Invalid index';
    }
    if(index+offset<0 || index+offset>array.length-1) {
        console.error('Invalid offset');
        return 'invalid offset';
    }
    const output = [...array];
    const temp = output.splice(index, 1);
    output.splice(index+offset, 0, temp[0]);
    return output;
}

// 5. Count occurrences.
const numbers4 = [6, 4, 4, 5, 6, 6, 8, 1, 1];
searchElement = 6;

// First solution.
function countOccurrences(array, searchElement) {
    let count = 0;
    let index = 0;
    for(let element of array)
        if(element === searchElement)
            count++;
    return count;
}

const count = countOccurrences(numbers4, searchElement);
console.log(count);

// Second solution.
// some assistance: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const count2 = numbers4.reduce( function(accumulator, currentValue) {
    if(currentValue === accumulator.key)
        accumulator.count++;
    return accumulator;
}, ({
    key: searchElement,
    count: 0
    })
);

console.log(count2.count);

// Proposed solution
function countOccurrences2(numbers4, searchElement) 
{
    return numbers4.reduce( (accumulator, current) => { 
        const occurrence = (current === searchElement) ? 1 : 0
        return accumulator + occurrence;
    }, 0); 
}

const count3 = countOccurrences2(numbers4, searchElement);
console.log(count3);

// 6. Get max.
const numbers5 = [6, 4, 4, 5, 9, 6, 8, 1, 1];

const max = getMax(numbers5);
console.log(max);

const max2 = getMax2(numbers5);
console.log(max2);

const max3 = getMax3(numbers5);
console.log(max3);

// First solution.
function getMax(array) {
    if(array.length === 0) return array;
    let currentMax = array[0];
    for(let currVal of array)
        if(currVal > currentMax) 
            currentMax = currVal;
    return currentMax;
}

// Second solution.
function getMax2(array) {
    if(array.length === 0) return array;
    return numbers5.reduce( (accumulator, currentValue) => {
        accumulator = (currentValue > accumulator) ? currentValue : accumulator;
        return accumulator;
    });
}

// Proposed solution.
function getMax3(array) {
    if(array.length === 0) return array;
    return numbers5.reduce( (a, b) => (a > b) ? a : b );
}

// 7. Movies.
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

// Write code to get all the movies from 2018 with rating > 4,
// Sort them by rating in descending order (higher rating should come first),
// Pick only title property and display in the console. - Result: 'b', 'a'.

// First solution.
const moviesTitles = movies.filter( currMovie => currMovie.rating >= 4 )
    .filter( currMovie => currMovie.year >= 2018 )
    .sort( (a, b) => a.rating < b.rating )
    .reduce( (titlesArray, currMovie) => { titlesArray.push(currMovie.title); return titlesArray; }, []);

console.log(moviesTitles);

// Second solution.
const moviesTitles2 = movies.sort( (a, b) => a.rating < b.rating )
    .reduce( (titlesArray, currMovie) => {
        if(currMovie.rating >= 4 && currMovie.year >= 2018) 
            titlesArray.push(currMovie.title);
        return titlesArray;
    }, [] );

console.log(moviesTitles2);

// Proposed solution.
const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort( (a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(titles);