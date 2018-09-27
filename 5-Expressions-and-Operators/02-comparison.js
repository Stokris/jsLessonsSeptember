/*
Comparison operators
*/

//equality
console.log('3' == 3); //type coercion.. took two different types, string and number, to see if equal
console.log('three' == 3); //not equal
console.log(0 == false);

//strict equality --> checks value and type
console.log(3 === 3);
console.log(3 === '3');

//not equal
console.log('4' != 4); // "!=" doesn't care about type, so output is false

//strict not equal
console.log('3' !== 3); //checks type and value

//greater than
console.log(3 > 2);

//less than
console.log(2 < 3);

//greater than or equal to
console.log(3 >= 3);

//less than or equal to
console.log(4 <= 4);

//and--returns true if the left and right sides are both true
console.log(true && true); //output is true
let x = 5;
console.log(x < 10 && x > -5); //true
console.log(x < 10 && x > 15); //false

//tangent
let str = 'a'; //a is position one in the alphabet, p is greater 
console.log(str < 'p');

//or-- will return true if the left OR right are true
console.log(true || false);
let x = 5;
console.log(x < 10 || x > 15); //true, 5 is less than ten
