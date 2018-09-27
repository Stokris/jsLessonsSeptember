/*\ 
RECAP
*/

let stringExample = "string";
let numberExample = 0;
let boolExample = true;

let conditionExample = 0;

//if else example-- they run when the statement is true
if (typeof conditionExample === 'string'){
    console.log("yep, its a string");
} else if (typeof conditionExample === "number"){
    console.log("yep, its a number");
} else if (typeof conditionExample === "boolean"){
    console.log("yep its a boolean!");
}

console.log(typeof conditionExample);
//switch--> does not have to have a default choice
switch (typeof conditionExample) {
    case "string":
    console.log("this is a string");
    break;
    case "number":
    console.log("this is a number");
    break;
    default:
    console.log("this is not a string or a number");
    break;
}

//ternary---has to have a default-- default in this is only written as the result (console.log"" etc)
(typeof conditionExample === "string") ? console.log("our variable is a string")
: (typeof conditionExample === "number") ? console.log("our variable is a number")
: (typeof conditionExample === "undefined") ? console.log("our variable is undefined")
: console.log("this is our default");


let fb = 15; //with this, this stops at the first correct answer, switched fizz buzz and 
//fizz to get a result of fizz buzz

if (fb % 3 === 0 && fb % 5 === 0){
    console.log("fizz buzz");
} else if (fb % 5 === 0) {
    console.log("buzz");
} else if (fb % 3 === 0){
    console.log("fizz");
}

switch (true){
    case (fb % 15 === 0):
    console.log("fizz buzz");
    break;
    case (fb % 5 === 0):
    console.log("buzz");
    break;
    case (fb % 3 === 0):
    console.log("fizz");
    break;
}

(fb % 15 === 0) ? console.log("fizz buzz")
: (fb % 5 === 0) ? console.log("buzz")
: (fb % 3 === 0) ? console.log("fizz")
: console.log("none of the above");