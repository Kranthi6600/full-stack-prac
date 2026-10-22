// there are 2 type of destructuring
// 1. array destructuring
// 2. object destructuring

//array destructuring
const arr = [1,2,3,4,5];
const [a, b, c, d, e] = arr
console.log(a, c, d);

//skipping elements
const [f, ,g] = arr
console.log(f, g);

// object destructuring
const obj = {
    name: "Luffy",
    age: 20
}
const {name: userName, age} = obj
console.log(userName, age);
