// Function declaration
function walk() {
    console.log('walk');
} // no need for semicolon

// Function expression (declaring a variable, then setting this variable to a function)
// Functions are object, so setting variable to function 
// is similar to setting variable to object.
// This is anonymous function expression, 'run' is function reference.
let run = function() {
    console.log('run');
}; // has to be semicolon

let move = run;
run();
move();

/*
Function that is declared may be called before it is declared.
Function created using expression syntax may not be called before it is declared,
the same way as variable can not be referenced before it is declared.

Hoisting - the process of moving all function declarations to the top of the file.
This is done by javascript engine automatically while executing the code.
*/

function sum(a, b) {
    console.log(arguments); // Each function has 'argumrnts' object, which has some properties.
    return a + b;
}
// If not all arguments are passed to function, the result is NaN, as 1 + undefined = NaN.
console.log(sum(1));
// If passed more arguments than function requires, only the first required arguments are used. 
console.log(sum(1, 2, 3, 4, 5));

// Setting function to use all the arguments that were passed to it.
// In this case function parameters may be removed completely.
function sum2() {
    let total = 0;
    for(let value of arguments)
        total += value;
    return total;
}
console.log(sum2(1, 2, 3, 4, 5, 10));

// The 'rest' operator (...args).
// The rest operator puts all arguments that were passed to a function in 'args' array.
// This is not spread operator, as spread operator is used in arrays. 
// Spread operator spreads array to its individual elements.
// 'reduce' method may be used to get the sum of all arguments in array.
function sum3(...args) {
    console.log(args);
    return args.reduce( (a, b) => a + b );
}
console.log(sum3(1, 2, 3, 4, 5, 10));

// Calculating cost of all the items in the shopping cart
function sum4(discount, ...prices) {
    const total = prices.reduce( (a, b) => a+b );
    return total * (1 - discount);
}
console.log(sum4(0.1, 20, 30));

/* Default parameters. */
// A way to provide default values to variables.
function interest(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;

    return principal * rate / 100 * years;
}
console.log(interest(10000));

// Second way to provide default values to function parameters (from ES6).
// If default values provided this way, then default values 
// must be provided for all parameters, or the last ones, 
// othervise the output will be NaN.
function interest2(principal, rate=3.5, years=5) {
    return principal * rate / 100 * years;
}
console.log(interest2(10000));

/* Getters and Setters. */

// To set a getter prefex it with 'get' keyword.
// To set a setter prefex it with 'set' keyword.
// Reffer to getter as property, not a method - call it without parentheses.
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const nameParts = value.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
};

// Calling setter
person.fullName = 'John Smith';

// Calling getter
console.log(person.fullName);

console.log(person);

/* Try and Catch. */

/*
Definsive programming - making sure that values that come into function are valid.
Typically done in the beginning of a function / method.
*/

// Basic validation:
const person1 = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if(typeof value !== 'string') return;
        const nameParts = value.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
};

person1.fullName = 'John Smith';

// Throwing exception:
const person2 = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if(typeof value !== 'string') 
            throw new Error('Value is not a string.'); // When thrown, the Error object turns to exception.

        const nameParts = value.split(' ');
        if(nameParts.length !==2)
            throw new Error('Enter a first and last name.');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
};

try{
    person2.fullName = 'John Smith';
}
catch (e) { // catching Error object that was thrown on line 142
    alert(e);
}

console.log(person2);

/* 
Let vs Var.
Let - the scope is limited to the codeblock in which it is defined.
Var - the scope is limited to the function in which it is defined.

Let was introduced in ES6 (ES2015), as well as const.

Let, Const = block-scoped variables.
Var = function scoped variables.   

Global variables and functions are attached to 'window' object in browser.
*/

var color = 'red';
// 'window.color' in console will result in 'red'.
let age = 30;
// 'window.age' in console will result in 'undefined'.

/* 
'window' is central and can have only one instance.
Adding any variables to 'window' object should be avoided.
Using 'var' keyword should be avoided.
*/

/*
This.

'this' references the object that is executing the current function.
In case of global functions, 'this' references the global object, 
which is the 'window' object in browsers, and 'global' in node.
*/

// 'this' refers to the 'video' object itself
const video = {
    title: 'a',
    play() {
        console.log(this); 
    }
};

// 'this' refers to the 'video' object itself
video.stop = function() {
    console.log(this); 
}
video.play();
video.stop();

// 'this' refers to the 'window' object
function playVideo() {
    console.log(this); 
}
playVideo();

// When using 'new' operator, 
// it creates new object {},
// and sets 'this' to point to newly created object.
function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b');

// Callback function is global, and doesn't belong to the object it's in. 
const video1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {   // 'this' references to 'video1' object
            console.log(this, tag);         // 'this' references to global object (window), as callback is global
        });
    }
};

video1.showTags();

// 'forEach' method allows to pass additional argument to provide reference to 'this' inside of callback (line 245).  
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {   // 'this' references to 'video2' object
            console.log(this.title, tag);   // 'this' references to 'video2' object because of the additional argument on the next line
        }, this);
    }
};

video2.showTags();

// Changing 'this' reference without additional argument.
// Setting additional variable that points to 'video3' object,
// then, using this variable inside of global callback function.
const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;  // 'self' is referencing 'video3' object
        this.tags.forEach(function(tag) {   // 'this' references to 'video3' object
            console.log(self.title, tag);   // 'self' references to 'video3' object because it was set so before
        });
    }
};

video3.showTags();

// Changing the value of 'this' with methods 'apply', 'bind' or 'call'.
// As function is object, and it has some methods, the value of 'this'
// may be changed with some of these methods.
function playVideo() {
    console.log(this);
}

playVideo();    // references to window object
// The first argument passed to these functions will be used as the value of this.
// The only difference between the functions is how they receive arguments: 
// separate arguments vs array.
playVideo.call({ name: 'Mosh'});    // references object that was passed as argument
playVideo.apply({ name: 'Mosh'});    // references object that was passed as argument

// 'bind' method doesn't call 'playVideo()' function, instead, it returns a new function,
// and sets 'this' to permanently point to object that was passed as argument.
const fn = playVideo.bind({name: 'Mosh'});
fn();

// The same as above, the short way.
playVideo.bind({name: 'Mosh'})();

// Using 'bind' method to chage value of this.
const video4 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {   // 'this' references to 'video3' object
            console.log(this.title, tag);
        }.bind(this));
    }
};

video4.showTags();

// Another solution - using arrow functions.
// Since ES6 arrow functions inherit 'this' value from containig function.
const video5 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {          // 'this' references to video5
            console.log(this.title, tag);   // 'this' references to video5
        });
    }
};

video5.showTags();