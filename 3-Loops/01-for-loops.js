/*
Classic for loops
*/

//Loop variations
//for statement
//do while statement
//while statement
//labeled statement
//break statement
//continue statement
//for in statement
//for of statement

for (let i = 0; i < 10; i++) { //starts at 0, counts up to but not inluding 10, by one's
    console.log(i);
}

for (let i = 0; i <= 20; i+=2) { //starts at 0, counts up to 20 by two's
    console.log(i);
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}


let name = "Kristen"; //shows how to go through name and show each individual letter

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

let sum = 0; //this shows how to start at 0 and adds all the numbers up to 50
for (let i = 1; i<=50; i++){
   console.log(sum);
    sum = sum + i;
}
console.log(sum);
