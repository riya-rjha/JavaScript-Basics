// Splice - used to change the contents of array
// Parameters: (startIndex, deleteCount, items to add)
// deleteCount and items to add are optional params

let arr1 = ["parrot", "sparrow", "pigeon", "cuckoo"];
let arr2 = ["apple", "banana", "cherry", "dates", "elderberry"];
let arr3 = ["carrot", "broccoli", "spinach", "potato", "tomato"];
let arr4 = ["Alice", "Bob", "Charlie", "David", "Eve"];
let arr5 = ["Harvard", "MIT", "Stanford", "Yale", "Princeton"];
let arr6 = ["parrot", , "pigeon", , "crow"];

arr1.splice(1); // Delete all elements starting from index 1
console.log(arr1); // [ 'parrot' ]

// Remove 0 elements before index 2 and insert

let startIndex = 2;
let item = "crow";
console.log(arr1.splice(startIndex, 0, item)); // [] -> as nothing is removed
console.log(arr1); // [ 'parrot', 'sparrow', 'crow', 'pigeon', 'cuckoo' ]

// Remove 0 elements before index 0 and insert

arr2.splice(0, 0, "strawberry");
console.log(arr2); // [ 'strawberry', 'apple', 'banana', 'cherry', 'dates', 'elderberry' ]

// Remove 0 elements from last index and insert

arr3.splice(arr3.length, 0, "fenugreek"); // startIndex represents index right after last element
console.log(arr3); // [ 'carrot', 'broccoli', 'spinach', 'potato', 'tomato', 'fenugreek' ]

arr3.splice(arr3.length - 1, 1, "new tomato");
console.log(arr3); // [ 'carrot', 'broccoli', 'spinach', 'potato', 'tomato', 'new tomato' ]

// Remove 1 element at given index

startIndex = 4;
arr4.splice(startIndex, 1);
console.log(arr4); // Eve deleted
// [ 'Alice', 'Bob', 'Charlie', 'David' ]

// Remove 1 element at given index and insert

startIndex = startIndex - 2;
arr4.splice(startIndex, 1, "New Name");
console.log(arr4); // Insert element at the startIndex
// [ 'Alice', 'Bob', 'New Name', 'David' ]

// Remove 2 elements from given index and insert

arr5.splice(3, 2, "IIT", "IISC");
console.log(arr5); // [ 'Harvard', 'MIT', 'Stanford', 'IIT', 'IISC' ]

// Remove 3 elements from negative index

arr5.splice(-2, 3);
console.log(arr5); // Last 3 elements deleted // [ 'Harvard', 'MIT', 'Stanford' ]

// Remove all elements starting from given index

arr1.splice(startIndex);
console.log(arr1); // [ 'parrot', 'sparrow' ]

// Splice on Sparse Arrays: Sparse arrays are those which have empty(void) spaces

arr6.splice(startIndex, 3);
console.log(arr6); // [ 'parrot', <1 empty item> ]


// -------------------------------------------------


// Slice - used to extract a part of array without modifying it's contents

// start and end params -> Optional

arr1 = ['carrot', 'broccoli', 'spinach', 'potato', 'tomato', 'new tomato'];
arr2 = ['Harvard', 'MIT', 'Stanford', 'IIT', 'IISC'];

console.log(arr1.slice()); // all elements
console.log(arr1.slice(3, 4)); // 3 to 3, 1 element
console.log(arr1.slice(2)); // 2 to end

const result = arr2.slice(2, -3); 
console.log(result); // empty array

console.log(arr2.slice(1, -2)); // [ 'MIT', 'Stanford' ]
// index from 1 to -3 (2) -> 2 elements

