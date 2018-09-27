//Ternary

var x = 6;

(x > 0) ? console.log("x is greater than 0.") : console.log("x is not greater than 0")

if (x > 0) {
    console.log("greater")
} else {
    console.log("lesser")
}

let x = 10;
(x == 0) ? console.log("x equals 0") : (x < 0) ? console.log("x is less than zero") : console.log("x is greater than 0")

let age = 27;
 
(age >= 18) ? console.log('Yay you can vote') : (age >= 21) ? console.log('Yay you can drink') : (age >= 25) ? console.log('Yay you can rent a car'): console.log(' x can have all the fun');

let yep = -8;

(yep < 0 && yep > -10) ? console.log("yep is between 0 and -10") : (yep > 0) ? console.log("yep is greater than 0") : console.log("yep is greater than 0");

let y = 5;

(y ==2) ? console.log("y is equal to two") : console.log("default");