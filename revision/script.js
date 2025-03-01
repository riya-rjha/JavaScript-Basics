// Append & AppendChild

let root = document.getElementById("root");

let divOne = document.createElement("div");

let div2 = document.createElement("div");
div2.classList.add("div2");

let para = document.createElement("p");
para.innerHTML = "This is a paragraph";

let para2 = document.createElement("p");
para2.innerHTML = "This is paragraph II";

let para3 = document.createElement("p");
para3.innerHTML = "This is paragraph III";

root.appendChild(divOne);
divOne.append(div2, para);
root.append(para2, para3);


// Remove & RemoveChild

let root2 = document.getElementById("root2");
let h3Tag = document.querySelector("#root2 .head .foot .more h3");
console.log(h3Tag);
h3Tag.remove();

h3Tag.innerHTML = "Restoring myself after removal not possible"; // since that element is removed from the DOM

let classMore = document.querySelector(".more");

let newH3Tag = document.createElement("h3");
newH3Tag.innerText = "New element created & appended at the same position after deletion";
classMore.appendChild(newH3Tag)

let headClass = document.querySelector(".head");
let footClass = document.querySelector(".foot");
headClass.removeChild(footClass) // Removed the foot class


// Prepend

h3Tag.innerHTML = "Prepend"
root2.prepend(h3Tag);

// SetAttribute

let btn = document.querySelector("button");
btn.setAttribute("disabled", true)
