//Reading from a file
const fs = require("fs");
let text = fs.readFileSync("learning.txt");
console.log("The contents of the file are : " + text);

//Writing to a new text file
text = text.toString().replace("Harry Bhai", "me myself!");
console.log("Creating a new file : ");
fs.writeFileSync("teaching.txt", text);

