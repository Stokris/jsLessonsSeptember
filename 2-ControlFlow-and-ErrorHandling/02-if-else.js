/*
if else
*/

weather = 75;

if (weather < 70){
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary!');
}

//example below
name = 'Kristen'

if (name = true){
console.log('Hello my name is Kristen');
} else {
    console.log('Hello, what is your name?');
}

//end with only first letter of name being capitalized

function name(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
 console.log(name('kristen'));

 let name = 'kRISTen';

 if (name[0] == name[0].toUpperCase()){
     firstLetter = name[0] + name.slice(1).toLowerCase();
     console.log(firstLetter);
 } else {
     otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
     console.log(otherLetters);
 }

//adding multiple variables to the equation

let age = 29

if (age < 18){
    console.log('sorry too young')
} else if (age >= 18 && age < 21) {
    console.log('yay you can vote')
} else if (age >= 21 && age < 25){
    console.log('yay you can drink')
} else if (age >= 25) {
    console.log('yay you can rent a car')
}

