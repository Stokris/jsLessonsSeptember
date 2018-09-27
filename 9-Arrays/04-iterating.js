//Iterating

let food = ["Pumpkin pie", "Shrimp", "Quesadilla", "Cheese cake", "Hotdog"];

//food.forEach(f => {console.log(f)})
food.forEach((food, number) => {
    console.log(food);
    console.log(number);
}) //resulted in each index number and the value of each number

let movies = ["JP", "Lost World", "JP3", "JW", "Conjuring"];

movies.forEach((movies, number) => {
    console.log(movies);
    console.log(number);
})

movies.push("JW2");
console.log(movies);

movies.splice(4, 4, "JW2");
console.log(movies);

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let newArray = new Array(73);
console.log(newArray.length);
newArray.forEach(el => {
    console.log(el);
})
console.log(newArray);