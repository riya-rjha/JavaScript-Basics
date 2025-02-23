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


//  -------------------------------------------

// isNaN()

console.log("Checking for isNaN");

let aNaN = NaN;
console.log(aNaN === NaN); // equating to NaN results in false even if its true
console.log(isNaN(aNaN)); // Always use isNaN
console.log(isNaN("string")); // true as string is Not a Number
console.log(isNaN(Number.isNaN("s"))); // false 
// Number.isNaN("S") -> false as S is not a number
// isNaN(false) -> as false is converted to 0, and 0 is a number so returns false
console.log(isNaN(false)); // false -> converts false to 0 and 0 is a numbet
console.log("Line")
console.log(Number.isNaN(0))

// isFinite()

console.log("Checking for isFinite");

console.log(Number.isFinite(NaN));
console.log(Number.isFinite("213")); // Number.isFinite() checks strict type checking
console.log(isFinite("213")); // true as isFinite converts to number and then checks
console.log(Number.isFinite(12));

// Object.is()

console.log("Checking objects equality: ");

let flag = Object.is({}, {});
console.log(flag); // false
// since they are not the same object in memory
// Object.is() returns true when both the objects point to the same reference

// Special Cases
flag = Object.is(NaN, NaN); // true
console.log(flag);
flag = Object.is(-0, +0); // false
console.log(flag);
flag = Object.is(0, 0); // true
console.log(flag);

// String methods

let str = "Hello World";
console.log(str.at(4));
console.log(str[4]);
console.log(str.indexOf("World"));
console.log(str.indexOf('o'));
console.log(str.lastIndexOf('o'));
console.log(str.startsWith("She")); // false
console.log(str.endsWith("Wor")); // false
console.log("Includes: ");
console.log(str.includes("Wor")); // checks for substring, true as Wor present


/* 
    Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
*/

function truncate(str, maxLength) {
    let substring = str;
    if (str.length > maxLength) {
        substring = str.substring(0, maxLength);
        for (let i = maxLength; i < str.length; i++) {
            substring += '.';
        }
    }
    console.log(substring);
}

function truncate(str, maxLength) {
    let substring;
    substring = str.length > maxLength ? str.slice(0, maxLength - 1) + "..." : str;
    console.log(substring);
};

// When truncate is written again the previous method is overwritten by the current method

truncate("What I'd like to tell on this topic is:", 20) // "What I'd like to te…"

truncate("Hi everyone!", 20) // "Hi everyone!"


// Extract the money
// console.log( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue("$120"));

// ---------------------------------------

// Tasks

// Task 1: Convert dash-separated string into camelCase

function camelize(str) {
    // const dashSeparatedArr = str.split("-");
    // for (let i = 1; i < dashSeparatedArr.length; i++) {
    //     dashSeparatedArr[i] = dashSeparatedArr[i].at(0).toUpperCase() + dashSeparatedArr[i].slice(1);
    // }
    // let ans = dashSeparatedArr.join("");
    // return ans;

    return str
        .split("-")
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join("");
};

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


// Task 2: Filter Range
// Show elements more than equal to a and less than equal to b

function filterRange(arr, a, b) {
    const newArr = arr.filter((el) => el >= a && el <= b);
    console.log("Modified Array: " + newArr);
    console.log("Original Array: " + arr);
};

filterRange([5, 3, 8, 1], 1, 4);


// Task 3: Filter range in "in-place"
// Modify the array and remove all values except those where a ≤ arr[i] ≤ b

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > b || arr[i] < a) {
            arr.splice(i, 1);
            i--;
        }
    }
    console.log(arr)
}

filterRangeInPlace([5, 3, 8, 1], 1, 4);


// Task 4: Sort in decreasing order

function sortArr(arr) {
    arr.sort(((a, b) => b - a));
    console.log(arr)
}

let arr = [5, 2, 1, -10, 8];
sortArr(arr)


// Task 5: Copy and Sort array

function copySorted(strings) {
    let newStrings = strings.slice();
    newStrings.sort()
    console.log(newStrings)
}

let strings = ["HTML", "JavaScript", "CSS"];
copySorted(strings)


// Task 6: Create an extendable calculator

class Calculator {
    ans = 0;

    methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    }

    calculate(str) {
        const nos = str.split(" ");
        // ['3', '+', '7']
        this.num1 = + nos[0];
        this.num2 = + nos[2];
        this.operator = nos[1];
        return this.methods[this.operator](this.num1, this.num2);
    }

    addMethod(name, func) {
        return this.methods[name] = func;
    }
}

let powerCalc = new Calculator;
console.log(powerCalc.calculate("3 + 7")); // 10

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.methods);

let res = powerCalc.calculate("2 ** 3");
console.log(res); // 8


// Task 7: Map to names
// Convert user.names to an array of names

let john = {
    name: "John",
    age: 25
};
let pete = {
    name: "Pete",
    age: 30
};
let mary = {
    name: "Mary",
    age: 28
};

let users = [john, pete, mary];

let names = [];
users.forEach(element => {
    names.push(element["name"]);
});

console.log(names); // John, Pete, Mary


// Task 8: Map to Objects

let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [john2, pete2, mary2];

let usersMapped = [];

users2.forEach(element => {
    usersMapped.push({
        fullName: element["name"] + " " + element["surname"],
        id: element["id"]
    });
});

let anotherUsersMapped = users2.map((user) => {
    return {
        fullName: `${user.name} ${user.surname}`,
        id: `${user.id}`
    }
});

console.log(anotherUsersMapped);
console.log(usersMapped);

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith


// Task 9: Sort users by age

let user1 = {
    "name": "User 1",
    "age": 21
};
let user3 = {
    "name": "User 3",
    "age": 52
};
let user7 = {
    "name": "User 7",
    "age": 10
};

let totUsers = [];
totUsers.push(user1, user7, user3);
totUsers.sort((a, b) => a.age - b.age);
console.log(totUsers)


// Task 10: Shuffle an array
// That randomly shuffles elements of array

function shuffle(arr) {
    let idx1 = Math.floor(Math.random() * arr.length);
    let idx2 = Math.floor(Math.random() * arr.length);
    // Alternate to reversing
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    // let temp = arr[idx1];
    // arr[idx1] = arr[idx2];
    // arr[idx2] = temp;
    console.log(arr);
};

shuffle([1, 2, 3]);
shuffle([1, 2, 3]);
shuffle([1, 2, 3]);
shuffle([1, 2, 3]);
shuffle([1, 2, 3]);

// Fisher-Yates Shuffle Algorithm
// To start iterating from end and swap with a random number
// Count the occurrences of each array string generate and compare


let count = {
    "131": 0,
    "113": 0,
    "311": 0,
    "311": 0,
    "113": 0,
    "131": 0,
};

function shuffleArray() {
    for (let i = iterableArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

for (let iter = 0; iter < 100; iter++) {
    let iterableArr = [1, 3, 1];
    shuffle(iterableArr);
    count[iterableArr.join("")]++;
}

for (const key in count) {
    console.log(`Key: ${key} Count: ${count[key]}`)
}


// Task 11: Filter unique array members

function unique(arr) {
    let set = new Set();
    arr.forEach(element => {
        set.add(element);
    });
    return set;
}

let words = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(words));


// Task 12: Create keyed object from array

let allUsers = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

console.log("Users by ID: ");
let usersById = groupById(allUsers);
console.log(usersById)

function groupById(allUsers) {
    return allUsers.reduce((ans, element) => {
        ans[element.id] = element;
        return ans;
    }, {});
};


/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
