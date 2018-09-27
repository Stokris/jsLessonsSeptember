// Arrow Functions
function coffee() {
    console.log("coffee rules.")
}

let tea = () => { // "=>" is the fat arrow
    console.log("tea is awesome.")
}

coffee();
tea();

var cats = (kitten, puppy) => {
    console.log(`i have ${kitten} cats, and ${puppy} dogs.`)
}

cats(2, 3); //will not work if above the function

//Arrow function body styles
//concise
let apples = x => console.log(`there are ${x} apples`)
apples(5);

//block
let peaches = (x) => { console.log(`there are ${x} peaches`)}
peaches(6);