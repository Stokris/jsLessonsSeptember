/*
Hoisting
*/
console.log(scissors); //line 4 and five when ran equals undefined bc the value of scissors was defined 
//after being logged
var scissors = "blue";

console.log(scissors); //line 4 and 8 when ran equal blue bc the value was defined before being logged

function hello(){
    console.log('hoisting is... interesting')
}
hello();
