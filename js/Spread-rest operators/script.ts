
//spread operator
const arr = [1,2,3,4,5];
const arr2 = [...arr, 6,7,8];
console.log(arr2);

//rest operator
const arr3 = [1,2,3,4,5];
const [a, b, ...rest] = arr3;
console.log(a);
console.log(b);
console.log(rest);