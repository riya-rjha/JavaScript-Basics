const arr = [1, 3, "Java", 'J', 4, "Oracle", 41];

const obj = {
    "name": "Java",
    "platfom": "Oracle",
    "developed": "1393",
};

// for-of loop

for (let key of arr) {
    console.log(key);
}

for (let element in obj) {
    console.log(element + " " + obj[element]);
}

// with method
// safe way to change the elements of array without altering the array

const newArr = arr.with(2, "Cpp");
console.log(newArr); // replaces 2nd index with Cpp at the place of Java

// Spread Operator
// Expands an array into more elements

let a1 = [1, 2, 3];
let a2 = [1, 2, 3];
let a3 = [1, 2, 3];
a4 = [24];

let totArr = [...a1, ...a2, ...a3, ...a4];
console.log(totArr);
// [
//     1, 2, 3, 1, 2,
//     3, 1, 2, 3, 24
// ]

// map does not modify the original array
// returns a new array
console.log(totArr.map(el => el * 2).join(" "));

// Flattening an array means converting the 2D array into 1D
// flatMap maps each element and flattens the result by one level

const twoDArrII = [1, 2, 3, 4, 5];
console.log("Flatting array with map + flat: ");
console.log(twoDArrII.flatMap((x) => [x, x * 2]));

// flat: Only flattens one level deep
const twoDArr = [1, [2, 3], [4, 5], 6, 7, [8]];
console.log("Using flat on array: ");
console.log(twoDArr.flat());

const flatMapArr = totArr.flatMap((el) => {
    el = el * 2;
    return el;
});

console.log(flatMapArr);

// Filter returns an array of elements which satisfy the condition specified 
// filter, map, reduce have params: element, index, array

const filteredArr = flatMapArr.filter((e, idx) => e > 2 && idx % 2 == 0);
console.log(filteredArr);

function changeElements(val) {
    return val == 2;
}

console.log(flatMapArr.filter((e) => changeElements(e)));

// reduceRight = applies function in accumulator from right to left and reduce it to single value
// if accumulator's intial value is not specified: Default -> end of array

let sum = flatMapArr.reduceRight((acc, el, index, arr) => {
    console.log("el: " + el + " idx:" + index);
    return acc + el;
});

console.log(sum);

// every function: Checks for each element of array

const newArray = flatMapArr.every((el) => el > 2); // false
console.log(flatMapArr);
console.log(newArray);

// some function: Checks for some elements of array

const newArrayII = flatMapArr.some((el) => el > 2); // true
console.log(newArrayII);

// Array.from() -> converts any data type to array

let string = "DSA in Java";
console.log(Array.from(string))