/*
TYPES 
*/

//Booleans
let on = true;
console.log(on);  //output --> true

let off = false;
console.log(off);  //output--> false

//boolean can represent true/false, yes/no, on/off

//Null
/*
Null = empty value (not 0; not undefined)

it is like an empty container, nothing is in it, but it still exists as a space to fill
*/



//Undefined
/*
Undefined equals no value assigned (not even an empty container)
undefined is not an error
*/

let undef = undefined;
console.log(undef);

let grass;
console.log(grass);

/*think of undefined and null as packages at ups
null--> package deliberately sent out as empty
undefined--> package that was forgotten, or that has not yet been used
*/

//Numbers
let degrees = 65;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let anotherNum = 0.2 + 0.1;
console.log(anotherNum);

let num = 0.3;
console.log(num);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10; //which comes out to 2 + 1 divided by 10
console.log(numbersAreHard);

//Strings
//strings = any value within quotes; JS will spit out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//numbers vs strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first); //number
console.log(second); //string

console.log(typeof first);
console.log(typeof second);

//What's going on here?
// the plus sign does addition when given two numbers, concatenation when given two strings

let third = 1050 + '100'; //number(1050) string('100') grouped together like string
console.log(third);

let nameOne = "Kristen"; 
let nameTwo = "Stokes";
let house = "319";
let street = "East St";
let city = "Fillmore";
let state = "Indiana";
let zip = "46128";

console.log(nameOne, nameTwo + ',', house, street, ',', city + ',', state, zip);

//Objects
/*
What is an object?
a container that can hold multiple datatypes
denoted by {}, has keys and values  example (color (key): 'blue (value)). separated by colon
each key is separated by a coma
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
}

console.log(burritosNow);
console.log(typeof burritosNow);

//Arrays
/*
arrays are great for lists
denoted by []
arrays have values separated by commas  example ['blue', 'green', 'yellow']
*/

let burritos = ['large', 4, true]

console.log(burritos);
console.log(typeof burritos);
















