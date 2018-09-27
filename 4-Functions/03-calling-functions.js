/*
calling functions
*/

function hi(){
    console.log('hi');
}
hi();
console.log(hi);

console.log(hi()); //comes out to "hi" and "undefined" because it called the function, and then tried to 
//find the value of hi which was not defined