const view = document.querySelector(".container");
const div = view.querySelector("div");
const heading = div.querySelector("h3");

//Syntax
//document.addEventListener(event, function, useCapture)
//useCapture - outermost element to the target element

const doSomething = () => {
    alert("Doing something productive finally!");
}

heading.addEventListener('click', doSomething);

heading.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked already!";
    event.target.style.padding = "5px";
})

//ready state change event
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log(`The page is now ready to be used!`);
        initApp();
        initForm();
    }
})

function initApp() {
    const view = document.querySelector(".container");
    const div = view.querySelector("div");
    const heading = div.querySelector("h3");

    view.addEventListener("click", (event) => {
        //stops all forward cases
        //bubbling - in to out
        //stopPropagation() - out to in -> didn't propagate further
        // event.stopPropagation();
        view.style.backgroundColor = "purple";
        // event.target.style.backgroundColor = "purple";
        //add - add a new class
        //remove - if there exists a class
        // view.classList.toggle("yes");
        // view.classList.toggle("no");

    }, false); //false default for event capture

    div.addEventListener("click", (event) => {
        event.stopPropagation();
        div.style.backgroundColor = "red";
        // div.classList.toggle("yes");
        // div.classList.toggle("no");
        // event.target.style.backgroundColor = "red";
    }, false); //true - outermost delivery

    heading.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "Click here!" ?
         (event.target.textContent = "Clicked") : (event.target.textContent = "Click here!");
    }, false);
}

//event bubbling - on clicking h3 div statements also trigger
//as h3 is inside div

//event.target -> changes properties of all elements of the event on which they are targetted

//Thus, we use element.style.property

const nav = document.querySelector("h1");
nav.addEventListener('mouseover', (event) => {
    event.target.classList.add("learning");
});

nav.addEventListener('mouseout', (event)=>{
    event.target.classList.remove("learning");
})

//on clicking enter the form automatically submits 
//to avoid this

const initForm = () => {
    const myForm = document.querySelector("#myForm");
    const button = document.getElementById("submit");
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        button.addEventListener('click', (event)=>{
            alert("Submitted!");
        })
    })
}