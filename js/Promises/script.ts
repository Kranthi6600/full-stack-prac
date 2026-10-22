// Promise.resolve('hello');

// Promise.resolve().then(()=> {
//     console.log('promise resolved');
// });

// Promise.resolve('hello').then((val)=>{
//     console.log(val);
// })

// async function getData(){
//     console.log('inside');

//     await Promise.resolve();
//     console.log('after promise');
// }

// console.log('start');

// getData();

// console.log('end');


// async function getName() {
//    return Promise.resolve("Luffy")
//     }

// getName().then((val) => console.log(val));



// async function getName() {
//    return Promise.resolve("Luffy")
// }
// async function main(){
//     const name = await getName();
//     console.log(name);
// }

// main();


// async function run() {
//   console.log("A");
//   const value = await Promise.resolve(10);
//   console.log(value);
// }

// run();
// console.log("B");