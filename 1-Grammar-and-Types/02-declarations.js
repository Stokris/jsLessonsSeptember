/*
VARIABLES

notes on variables
1- variable must begin with a letter, underscore, or dollar sign
2- you can use numbers but they must follow one of the above
3- javascript is case sensitive-- 'hello' and 'Hello' are different
*/

var a = 1;
var b = 2;
console.log(a + b);

/*
DECLARATIONS

Declarations are the LEFT SIDE of a variable
it is simply the name of the variable
on the left side of the assignment operator aka equal sign

Initializations are the RIGHT SIDE of a variable
set the value of the variable
includes the variable name, the equal sign, and the value  example x = 10
*/

var x;
console.log('Declaration:', x);

x = 10;
console.log('Initialization 1:', x);

x = 33;
console.log('Initialization 2:', x);

/*
Var, Let, and Const:
var = 'old' js keyword for variables
let = 'new' js keyword for variables
const = also 'new'; declares unchangeable variables
*/

let today = 'Great!';
const elevenFifty = 'Wonderful!';
console.log(today, elevenFifty);

today = "lovely!";
console.log(today, elevenFifty);

