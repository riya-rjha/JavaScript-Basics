const v1 = document.getElementById("box1");
const cont = document.querySelector(".container");
console.log(v1);
console.log(cont);
// v1.style.display = "flex";
// cont.style.display = "none";

// cont.style.justifyContent = "space-between";

const views = document.getElementsByClassName("container");
console.log(views);

//selecting by tag name
const learn = cont.querySelectorAll("div");
console.log(learn); // returns node list
//from the class container to all divs

const getSmnthng = cont.getElementsByTagName("div");
console.log(getSmnthng);

//more specific choosing of divs
const evenDivs = cont.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

//changing the properties of div elements
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "yellow";
    // evenDivs[i].style.width = "200px";
    // evenDivs[i].style.height = "200px";
}

const text = document.querySelector("h1");
text.textContent = "Learning DOM!";

const text_2 = document.querySelector("p");
text_2.innerHTML = "<p>Learning & Revising JavaScript!</p>";
console.log((text));
console.log((text_2));

//Navigating the DOM Tree
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
//child nodes consist of both elements and text
console.log(evenDivs[0].parentElement.childNodes);
//check for childNodes
console.log(evenDivs[0].parentElement.hasChildNodes());//returns boolean value
//lastChild
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
//firstChild
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
//Siblings
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

//Adding or removing from DOM
evenDivs[0].style.display = "none";
evenDivs[1].style.display = "flex";
evenDivs[1].style.flexDirection = "row-reverse";
evenDivs[1].style.flexWrap = "wrap";
evenDivs[1].style.width = "200px";

while (cont.lastChild) {
    //to remove all childs of container
    //and not removing the container
    cont.lastChild.remove();
}

//adding a new container
//in HTML DOM

const createNewDiv = (parent, iterator) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iterator;
    newDiv.style.backgroundColor = "#ff8";
    newDiv.style.border = "2px solid #121";
    newDiv.style.width = "130px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "space-around";
    newDiv.style.alignItems = "center";
    newDiv.style.flexDirection = "space-around";
    newDiv.style.flexWrap = "wrap";
    parent.append(newDiv);
};

//to create multiple elements 
//for loop
for (let i = 1; i <= 9; i++) {
    createNewDiv(cont, i);
}

//for a single element to be created
createNewDiv(cont, 10);

//to add script tag in head
//use <script defer></script>
//that prevents from printing null to the console window