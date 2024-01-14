// function* idMaker() {
//     let index = 0;
//     while (index < 5)
//         yield index++;
// }
// var gen = idMaker();
//
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// // Try to add one more console.log, just like the above see what happens.


const arr = ['0', '1', '4', 'a', '9', 'c', '16'];

//Iterator
const my_obj = {
    [Symbol.iterator]: function*() {
        for(let index of arr) {
            yield `${index}`;
        }
    }
};
//for adding sqrt that is less than 5
const all = [...my_obj]
    .map(i => parseInt(i, 10))
    .map(Math.sqrt)
    .filter((i) => i < 5)
    .reduce((i, d) => i + d);
console.log(all);