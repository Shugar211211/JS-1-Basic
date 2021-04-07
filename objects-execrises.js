// 1. Address object.

const firstAddress = {
    street: 'Yerushalaim 55',
    city: 'Bney-Brak',
    zip: 'yyyyyyy'
}

function showAddress(address) {
    for(let entry of Object.entries(address))
        console.log(entry);
}

function showAddress2(address) {
    for(let key in address) 
        console.log(key, address[key]);
}

showAddress(firstAddress);
showAddress2(firstAddress);

// 2. Factory and constructor functions.

// Factory function solution:
function createAddress(street, city, zip) {
    return {
        street,
        city,
        zip
    };
}

// Constructor solution:
function Address(street, city, zip) {
    this.street=street,
    this.city=city,
    this.zip=zip
}

const myAddress = createAddress('Hartsfeld 26', 'TLV', '6753098');
showAddress(myAddress);
showAddress2(myAddress);

const newAddress = new Address('Hovevey Tsion', 'TLV', 'xxxxxxx');
showAddress(newAddress);
showAddress2(newAddress);

// 3. Object equality.

function areEqual(address1, address2) {
    for(let key in address1)
        if(address1[key] !== address2[key])
            return false;
    return true;
}

function areSame(address1, address2) {
    if(address1 !== address2) 
        return false;
    return true;
    // return address1 === address2;
}

console.log(areEqual(firstAddress, myAddress));
console.log(areEqual(firstAddress, firstAddress));

console.log(areSame(firstAddress, myAddress));
console.log(areSame(firstAddress, firstAddress));

// 4. Blog post object.

const blogPost = {
    title: 'Post title',
    body: 'Post body goes here',
    author: 'Author of post',
    views: 3,
    comments: [
        {
            author: 'Author of comment1',
            body: 'Comment body1'
        },
        {
            author: 'Author of comment2',
            body: 'Comment body2'
        },
        {
            author: 'Author of comment3',
            body: 'Comment body3'
        }
    ],
    isLive: true 
};

console.log(blogPost);

// 5. Constructor functions.

function Post(title, body, author) {
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments = [];
    this.isLive = false;
};

const newPost = new Post('Title', 'Body', 'Author');
console.log(newPost);

// 6. Price range object.

function PriceRangeObject(label, lowerBound, upperBound) {
    this.label = label,
    this.lowerBound = lowerBound,
    this.upperBound = upperBound
}; 

const priceRangeArray = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10}, 
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20}, 
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 30}
];