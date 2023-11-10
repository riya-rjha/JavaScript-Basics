//Arrays
let arr = [1,2,3,4,5];

//unshift - adds at the first place & returns new length of array
console.log(arr.unshift(0));
console.log(arr);

//shifts - deletes first element & returns the value of deleted element
console.log(arr.shift());
console.log(arr);

//splice - deletes elements from starting indx to ending idx-1
//then places the value at starting of array
//returns the array of deleted elements 
console.log(arr.splice(0,4,6));
console.log(arr);

//delete elements
delete arr[0] //defines empty at that place - generally not preferred
console.log(arr);

let arr2 = [1,2,3,4,5];
console.log(arr2.splice(1,0,8)); //[1,8,2,3,4,5]
//no deletion as starting idx is greater than ending idx
//returns an empty array due to no deletion of elements
console.log(arr2);

//concatenation
let str1 = ['A','B','C','D'];
let str2 = ['E','F','G','H'];
console.log(str1.concat(str2));

//spread operator
const newArr = [...str1, ...str2];
console.log("NewArray: ", newArr)

//printing only sizes of arrays without use of spread operator or anything
const anotherArr = [str1, str2];
console.log(anotherArr); 

//multiple arrays
const A = [1,3,5,9];
const B = [2,4,6,8];
const C = [A,B];
console.log(C[0][1]);
const D = [11,13,15,17];
const E = [10,12,14,16];
const F = [C,D,E];

//Sorting Array in JS
let nums1 = [2,63,4,2,0,7,6];
nums1.sort((a, b) => a - b); //sorting in ascending order
console.log(nums1);
console.log(F[0][1][2]);
