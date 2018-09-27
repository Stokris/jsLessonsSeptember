//ARRAYS INTRO
//they have square brackets, hold multiple data types, good for lists

//overview and calling of an array
let students =["Tony", "Marshall", "Rhys", "Ray", 23, true, ["Ryan", "Iesha"]];
//index numbers  0         1          2     3       4   5       6
console.log(typeof students);  //comes out as object

console.log(students[2]);

//grabbing "Iesha" from the array inside of the array
//print out "hello iesha, you look nice today

console.log(students[6][1])  //call out the first array, close it, then do the second
console.log(`Hello ${students[6][1]}, you look nice today`) //second example below
console.log("Hello" +" ", students[6][1] +" ", "you look nice today");


let food = ["Pumpkin pie", "Shrimp", "Quesadilla", "Cheese cake", "Hotdog"];

for (let f of food){  //for of loop--- "f" in this represents the value (each food)
    console.log(f);
}

for (let i = 0; i < food.length; i++) {
    console.log(food[i])
}

food.push("Pizza") //.push added pizza to the array
console.log(food);

food.splice(1, 1, "Bananas"); //bananas replaced shrimp in the array, first number is the index 
//to start at, second number is things to remove, third is the replacement
console.log(food);

food.splice(2, 0, "Sweet potato pie");
console.log(food);

food.pop(); //removes the last value
console.log(food);