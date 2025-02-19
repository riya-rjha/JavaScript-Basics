// "use strict" -> Enabling this will result error in Line 50
// Object Wrappers -> They provide different functionalities for a given set of data type

// String 
let str = "this Is JavaScrIpT"
let capitalStr = str.toUpperCase();
console.log(capitalStr);

// Math
let n = 1.3274;
console.log(n.toFixed(2));
console.log(Math.trunc(n));

// Creating objects using "new" keyword
// But when an object is made using "new" keyword, it becomes an object
// UNRECOMMENDED

let newAns = false;
let ans = new Boolean(false);
console.log("Type of boolean var using new keyword: " + typeof ans);
console.log("Type of boolean var: " + typeof newAns);

// Objects and boolean both are truthy in if
if(ans){
    console.log("boolean true");
}
newAns = true;
if(newAns){
    console.log("object true");
}

// null and undefined are not wrapper classes as they do not have any methods
// they are most primitive

// console.log(null.method); // error as null has no methods

// Converting an object without new results in no absurd behaviour
// Eg. convert a string to number and create an object using a new keyword

let num = new Number("31");
console.log("Number using new keyword: " + typeof num); // object

let anotherNum = Number("312");
console.log("Number using only Number keyword: " + typeof anotherNum); // number

// Primitives are not objects
// They can't store additional data

let string = "4312";
string.test = "42";
console.log(string.test); // undefined as the wrapper object later on gets disappeared -> non-strict mode

// Primitive types: 
// string, number, bigInt, boolean, symbol, null, undefined

// Rest JS is all about Objects

// ------------------------------------------- //

// Numbers
// In JS, Regular nos are stored in 64 bit double precision floating point numbers

let bigNumber = 1e4;
let smallNumber = 1e-4;
console.log(bigNumber);
console.log(smallNumber);

// Representing binaryNumber
let binaryNum = 0b100;
console.log(binaryNum);

// Representing HexaDecimal Number
let hexaDecimal = 0xF;
console.log(hexaDecimal);

// Representing Octal Number
let octalNumber = 0o377;
console.log(octalNumber);

// Using .toString(base) to get number representation
let number = 4;
console.log(number.toString(2));

// If you want to call a method directly on a number, use ".." operator
console.log(8..toString(2)); 
console.log((8).toString(2)); // using bracket

// Rounding functions: ceil, floor, round, trunc

// 1. Math.floor - returns next smaller integer
console.log(Math.floor(-2.31));
console.log(Math.floor(2.31));

// 2. Math.ceil - returns next larger integer
console.log(Math.ceil(-3.42));
console.log(Math.ceil(3.42));

// 3. Math.round - rounds to nearest possible integer
console.log(Math.round(5.1));
console.log(Math.round(-5.8));
console.log(Math.round(5.5));
console.log(Math.round(-5.2));

