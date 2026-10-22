// A closure is when an inner function keeps access to variables from its outer function's scope, even after the outer function has finished running. The inner function "remembers" the environment where it was created.{}

// function outer(){
//     let count = 0;
//     return function inner(){
//         count++;
//         return count;
//     }
// }
// const counter = outer();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


// function outer(){
//     let a = 0;
//     console.log(a)
//     const inner = () =>{
//         a++;
//         console.log(a)
//         return a;
//     }
//     return inner;
// }

// const out = outer();
// console.log("First call:")
// console.log(out())
// console.log("Second call:")
// console.log(out())
// console.log("Third call:")
// console.log(out())