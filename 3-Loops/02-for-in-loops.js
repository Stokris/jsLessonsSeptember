/*
For in loops

Great for iterating over values in an object
*/

let student = {name: 'Christian', awesome: true, degree: 'JavaScript', week: 1};
//if console.log(student[item]) should grab the values, christian, true, js, 1
for (let item in student) { //grabbed the keys: name awesome, etc.
    console.log(item);
}

let catArray = ["tabby", "british shorthair", "burmser", "maine coon"];

for (cat in catArray) { //only grabbed position.. 0 1 2 3
    console.log(cat);
}

for (cat in catArray){ //this grabbed only the values.. tabby, maine coon, etc
    console.log(catArray[cat])
}

let name = "kristen";
let capName = '';

for (let ch in name){
    if (ch == 0) {
        capName = name[ch].toUpperCase();
    } else {
        capName = capName + name[ch].toLowerCase();
    }
    console.log(capName);
}
console.log
