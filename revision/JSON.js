// Destructuring - Unpack array into variables

let arr = ["Iron", "Man"];

let [name, surname] = arr;
console.log(name);
console.log(surname);

// unwanted elements can be thrown out using comma

let arr2 = ["Julius", "Ceaser", "Brutus", "Meena"];

let [name1, name2, , name3, name4, , ,] = arr2;

console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);

// works with any iterable

let [a, l, m] = "abc";
console.log(a);
console.log(m);

let obj = {
    "name": "Don",
    "surname": "Bradman",
    "name2": "David",
    "surname": "Beckham",
};

for (let [key, val] of Object.entries(obj)) {
    console.log(`Key: ${key}`);
    console.log(`Value: ${val}`);
}

// Swapping using Destructuring

let [firstName, lastName] = arr;
[firstName, lastName] = [lastName, firstName]
console.log(firstName);
console.log(lastName);

// Spread Operator

let [n1, n2, ...n3] = arr2;
console.log(n1);
console.log(n3);// returns an array of remaining values

// using default values in destructuring

let arr3 = ["A", "B", "C", "D", "E", "F", "G", "H"];
let [, , , , , , , , num1 = "RED", num2] = arr3;
console.log(num1);
console.log(num2); // no default value assigned -> num2 -> undefined

// Destructuring of objects

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title, w } = options;
console.log(title); // right key match -> Menu
console.log(w); // w -> No key match in options -> undefined

// order does not matter
// {height, width, title} = options; // assumes a block of code and block does not have assignments

({ height, width, title } = options);
console.log(height);
console.log(title);
console.log(width);

// Assigning obj values to new values
let { height: h } = options;
console.log(h);


// Date Functions

console.log(new Date())
console.log(new Date(0)); // 1970-01-01T00:00:00.000Z

let date = new Date();
console.log(date.getTime())

let year = 2025;
let month = 2;
date = 21;
let hours = 14;
let minutes = 6;
let seconds = 31;
let ms = 3;

date = new Date(year, month, date, hours, minutes, seconds, ms)
console.log(date)// UTC
console.log(date.toLocaleString()) // IST

// we can also set dates and times, date's autocorrect and autorectify feature is handy
// if we pass out of range values, it auto-adjusts itself


// JSON Methods

// JSON.stringify -> to convert objects into JSON
// JSON.parse -> to convert JSON back into object

// When we use JSON.stringify on object of objects, whole structure is stringified
// JSON.stringify() => Circular objects cannot be stringified

let json_obj = {
    name: "HRJ",
    "class": 10
};

let json_string = JSON.stringify(json_obj);
console.log(typeof json_string) // string
console.log(typeof json_obj.class); // number

let json = JSON.parse(json_string);
console.log(typeof json) // object

// JSON.stringify(value, replacer, space)
// replacer acts as filter to keep only those properties which are required (callback func)
// space acts as a pretty print

let json_obj_2 = {
    name: "RRJ",
    age: 20,
    password: "abc"
};

let count = 1;
let aString = JSON.stringify(json_obj_2, ["name"], `${count}. `);
console.log(aString);

// JSON.parse(text, reviver) 
// reviver - filter, helps change values (callback func)

let json_string_2 = JSON.stringify(json_obj_2);
// console.log(typeof json_string_2);

let ans = JSON.parse(json_string_2, (key, val) => {
    if(key == "password"){
        val = "********";
    }
    return val; // since callback funcs return something
});

console.log(ans);

