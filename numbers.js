//typeof keyword 
console.log(typeof 42);
console.log(typeof "Riya");

//Strings
let myVar = "Mathematics";
//length of string
console.log(myVar.length);
//Character slicing
console.log(myVar.charAt(3));
//IndexOf method
console.log(myVar.indexOf("mat"));//returns first occurrence
//LastIndexOf method
console.log(myVar.lastIndexOf("t"));//returns last occurrence
//Slicing methods
//ending index not included
//if ending idx not mentioned, slicing takes place till end
console.log(myVar.slice(3,9));
console.log(myVar.slice(0));//start to end
console.log(myVar.substring(4));
//Capital & Small letters
console.log(myVar.toUpperCase());
console.log(myVar.toLowerCase());
//includes
console.log(myVar.includes("atlas"));
//split method - returns a set of strings represented in the form of an array
console.log("Riya, Ranjan, Jha".split(""));//each letter represented by comma separated values
console.log("Riya, Ranjan, Jha".split(","));//each word represented by comma separated values
console.log(myVar.split('e'));//split word at the place of 'e'
//Strings can also be treated as array-like objects

//Numbers
const num1 = 5; //integer number
const float1 = 50.36;//decimal number
const string1 = "50";//string value
//concatenation
console.log(`${num1}${float1}`); 
console.log(num1 == float1);//different data types -> false
console.log(+string1 + parseFloat(string1))//+ converts into integer and then addition is done
//+ operator turns any variable to number
console.log(Number(string1) + 45);
//nAn - not a number
console.log(!isNaN(-Infinity)); //infinity is not a NAN - true
//check for integer
console.log(Number.isInteger(string1)); //string not an integer
console.log(Number.isInteger(num1)); // num is an integer

//parseFloat() -> returns a float kind variable
console.log(Number.parseFloat(num1));
//returns only decimal values
console.log(Number.parseFloat("1.25br26"));
//round off to 2 places of decimal
console.log((Math.floor(Math.random()*8)+1).toFixed(2));
console.log(42.5239.toFixed(4)); // round off to 4 decimals
//parseInt()
console.log(parseInt("785"));
//convert to string
console.log(num1.toString());
console.log(Number.isNaN("Riya"));
