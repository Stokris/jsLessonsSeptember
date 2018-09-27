/*
For of loops

better for arrays
*/

//let student = {name: "Emily", aewsome: true, degree: "JavaScript", week: 1};
//for (let key of student) {
 //   console.log(key);


 let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon'];

 for (cat of catArray){ //showing the value; tabby burmese, etc
     console.log(cat, 'says meow');
 }

 for (cat in catArray) { //shows the index number; 0 1 2 3
     console.log(cat, 'says meow');
 }