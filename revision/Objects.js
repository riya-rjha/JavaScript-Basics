/* 
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.

*/

function read() {
    const A = prompt("Enter the value of a: ");
    const B = prompt("Enter the value of b: ");
    const a = { a: Number(A) }; const b = { b: Number(B) };
    sum(A, B);
    mul(A, B);
}

function sum(a, b) {
    console.log(+a + +b);
    return a + b;
}

function mul(a, b) {
    console.log(a * b);
    return a * b;
}

read();

// Using "this"

let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = +prompt("Enter a: ");
        this.b = +prompt("Enter b: ");
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Object Chaining

let user = {
    name: "",
    age: 0,

    setName(name) {
        this.name = name;
        console.log(this);
        return this;
    },

    setAge(age) {
        this.age = age;
        return this;
    },

    greet() {
        console.log("Hello " + this.name);
        return this;
    },

    checkAgeGroup() {
        if (this.age >= 18) {
            console.log("You are an adult");
        } else {
            console.log("You are a child");
        }
        return this;
    },

};

user
    .setName("Riya")
    .greet()
    .setAge(31)
    .checkAgeGroup()
    .setName("HRJ")
    .greet();

// Constructor Functions

let obj = {};

function A(a, b) {
    // this = {}
    return obj
    // return this
}
function B(c, d) {
    return obj;
}

let a = new A(10, 13);
let b = new B(21, 2);
console.log(a);
console.log(b);


console.log((a === b)); // true

/*
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.


*/

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        let currVal = +prompt("Enter number: ", 0);
        this.value += currVal;
    }
    this.display = function () {
        console.log("Sum till now: ", this.value);
    }
};

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
accumulator.read();
accumulator.read();
accumulator.read();
accumulator.read();
console.log(accumulator.value);
accumulator.display();