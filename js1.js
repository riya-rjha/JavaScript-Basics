//Used in making hamburger menu (dropDown lists)
console.log("Studying variables and data types in JS");
let a = 10;
let b = 25;
let sum = a + b;
let diff = a - b;
let prod = a * b;
let qot = a / b;
console.log(sum);
console.log(diff);
console.log(prod);
console.log(qot);

let str = "This is Riya";
console.log(str);

let name = `Riyya`;
let nature = `is a hardworking girl`;
var temp = `${name} is a bad girl but also ${nature}`;

//constructor
var y = new String("This");

//getElementByID - Id mentioned
//.innerHTML - html tags
document.getElementById('container').innerHTML='<h1>This is not a heading tag<h1>';

//String functions
var str2="This is a string and is a good string";

//Finding first occurrence of string 
var po = str2.indexOf(' i');
console.log(po);

//Last occurrence of string
var pos = str2.lastIndexOf(' is');
console.log(pos);

//Slicing strings
//Creating substrings
let subStr = str.substring(1,7);
console.log(subStr);

//Replacing strings
let replace = str2.replace('string', 'Harshit');
console.log(replace);

//Uppercase & Lowercase
let str3 = "I AM A GOOD GIRL!";
let up = str3.toLowerCase();
console.log(up);
let str4 = "i am A Good girl!";
let low = str3.toUpperCase();
console.log(low);

//Concatenation
// concatenate the mentioned string into str
var newStr = str.concat(' a New String');
console.log(newStr);

//Removal of white spaces
//from start and end and not middle
let spaces_white = "    This is a     new String     ";
spaces_white.trim();
console.log(spaces_white);

//Extract character from string
//str = This is Riya
var ch3 = str.charAt(2);
console.log(str[6]);
console.log(ch3);

//Conditional Statements
let age = 17;
if(age>18){
    console.log('You are eligible to vote!');
}
else{
    console.log('You are not eligible to vote!');
}

//Arrays and objects
let employee = {
    name: "Riya",
    salary: "1000000",
    channel: "Code with Riya"
};
console.log(employee);

let names = [21, 12, 4,1, "Riya", null, undefined];
names = names.sort();
console.log(names);

//Creating functions
function greet(name){
    console.log(name+" is a good girl");
}
greet(name);

let greet_name = "Good morning!";
function greet2(name, greet_name){
    console.log(greet_name + " " + name);
    console.log(name + " is a good girl!");
}

greet2(name, greet_name);
function sum_MESS(a, b){
    return a+b;
}
console.log(sum_MESS(5,6));


// Interactions : Alert, Prompt, Confirm
/*
alert("This is a message");
let namesss = prompt("What is your name?", "Guest");
let deletePost = confirm("Do you really want to delete this post?");
if(deletePost){
    console.log("Post deleted successfully!");
}
else{
    console.log("Unable to delete post!");
}
*/

//Loops 
//Modern Javascript
//For loops
let arr = [1,2,3,4,5];
arr.forEach(function f(element) {
    console.log(element);
});

for (element of arr){
    console.log(arr);
}

let employees = {
    name1: "Riya",
    salary: 2,
    channel: "CWH"
};

for (key in employees){
    console.log(`The ${key} of employee is ${employees[key]}`);
}

//While loop
let i = 0;
while(i<5){
    console.log(`${i} is less than 4`);
    i++;
}

//Navigating DOM 
//Accessing elements from index of HTML page
let main = document.getElementById('main');
console.log(main);
//To show contents in string format
console.log(main.innerHTML);
// console.log(navigator.innerHTML = "<li>Hello World</li>");

//Selectors property
let sel = document.querySelectorAll('#main>li');
console.log(sel);

