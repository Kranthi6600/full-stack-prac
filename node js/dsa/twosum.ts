// const twoSum = (num: number[], target: number): number[] | undefined => {
//     for (let i = 0; i < num.length; i++) {
//         for (let j = i + 1; j < num.length; j++) {
//             if (num[i] + num[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

// console.log(twoSum([1, 2, 3, 4], 7)); //O(n^2)


const twoSum = (num: number[], target: number) => {
    const m = new Map();
    for(let i = 0; i < num.length; i++) {
        const diff = target - num[i];
        const idx = m.get(diff);
        if(idx !== undefined){
            return [idx, i];
        }
        m.set(num[i],i)
    }
}

console.log(twoSum([2,3,4], 7)) // O(n)
