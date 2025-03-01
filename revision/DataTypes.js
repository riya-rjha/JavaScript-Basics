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
if (ans) {
    console.log("boolean true");
}
newAns = true;
if (newAns) {
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

// Maps & Sets

// Arrays - ordered collection
// Maps - keyed collection

// Diff between object & map is that map allows keys of any type
// unlike objs allowing only string type

let map = new Map();
map.set(0, "num1");
map.set("name", "RRJ");
map.set([1, 2], "array");

console.log(map);

console.log(map.get(3)); // undefined
console.log(map.get("name"));

// Every map set calls it's value so we can chain them

map.set(true, 1)
    .set(false, 4);
console.log(map);

// Iteration over map

// map.keys() -> prints all keys
for (let a of map.keys()) {
    console.log(a);
}

// map.values() -> prints all values
for (let a of map.keys()) {
    console.log(map.get(a));
}

// map.entries() -> returns an iterable of entries
for (let entry of map.entries()) {
    console.log(entry)
}

// forEach on map params -> (value, key, map)
map.forEach((value, key, map) => {
    console.log("Value: ", value);
    console.log("Key: ", key);
    console.log("Map: ", map); // returns a 5 length map everytime
});

// Creating map from object
let obj = {
    "name": "Shtakshi",
    "class": 3
};

let mapObj = new Map(Object.entries(obj)); // Objec.entries() returns an array of key and value pairs 
console.log(mapObj);

// Creating object from map

let aMap = new Map([
    ["name", 1], // key : value
    ["class", 21],
    ["anotherStudentsName", "Shtakshi"],
    ["age", 31]]
);

console.log(Object.fromEntries(aMap))

// Set

let set = new Set();
set.add(31);
set.add(310);
set.add(31);
set.add(31);

console.log(set);
console.log(set.size);

let isVal = set.delete(31)
console.log(isVal)
console.log(set)

console.log(set.has(31));
console.log(set.has(310));

set.clear()
console.log(set);

// set.forEach() -> params: (value, valueAgain, set)

set.add("Name");
set.add(1);
set.add(2);
set.add(4);

set.forEach((val, valAgain, set) => {
    console.log("Value: " + val);
    console.log("Value Again: " + valAgain);
    console.log("Set: " + set);
});

// WeakMap

// In WeakMap, keys must be objects only and not primitives

let weakMap = new WeakMap();
weakMap.set(obj, "This is an Object");
console.log(weakMap.get(obj))

// weakMap.set("Primitve", Error); // Error

let joinArr = {"name": "Kali"};
let anotherMap = new WeakMap();
anotherMap.set(joinArr, true);
console.log(anotherMap.get(joinArr)) // true
joinArr = null;
console.log(anotherMap.get(joinArr)) // undefined -> as WeakMap changes the values if the reference is removed

// Application: WeakMap is used when we need to create additional storage space and remove the storage as and when the map is removed from the memory
// ie., the data stays as long as the map stays

// We can also use WeakMap in Cache. The object will be stored in cache as long as the session is going on and deletes if the reference is removed

// Limitations of using WeakMap & WeakSet: They cannot be iterated through iterables, or Object.keys(), Object.entries(), forEach etc.