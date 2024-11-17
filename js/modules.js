//strict mode invoked
//changes prev bad syntax to real errors
"strict mode";

//importing functions
// . - absolute Path
// ./ - relative Path

import f4 from "./exports.js";
console.log(f4()); //default

//multiple functions
import { f2, f3} from "./exports.js";
console.log( f2(), "and", f3().toLowerCase());

//changing names of functions
import{f5 as newFunction} from "./exports.js";
console.log(newFunction());

//importing all functions as a class
//drawback - you cannot change the name of function
//you have to call it as it is mentioned in the export.js file
import * as Functions from "./exports.js";
console.log(Functions.default());
console.log(Functions.f5());
console.log(Functions.f2());
console.log(Functions.f3());

import User from "./exports.js";
const user =  new User("john23@gmail.com", "John");
console.log(user.greeting());