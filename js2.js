//Create a function to change the background of para when clicked on button
function toggleHide(){
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    if(para.style.display!='none'){
        para.style.backgroundColor = 'black';
        para.style.color = 'white';
    }
    else{
        para.style.backgroundColor = `red`;
        para.style.color = `yellow`;
    }
}

//Hover with mouse functions
let paragraph = document.getElementById('para');
paragraph.addEventListener('mouseover', function run() {
   console.log('Mouse inside'); 
});

paragraph.addEventListener('mouseout', function run() {
    console.log('Mouse outside');
});

//Set Interval & Set Timeout
//Set-timeout : Allows us to run the function once
//Clear-timeout : Allows us to run the function repeatedly

function greets(){
    console.log('Hello Darlingg!');
}
setTimeout(() => {
    
}, 5000);//time in MiliSeconds
setTimeout(greets, 5000); //executed for greet function 5 seconds after reloading the page

//Multiple arguments
function greet(name, byeText){
    console.log("Hello " + name);
    console.log(byeText);
}
//In set-Timeout only mention function's name & donot call the function directly
setTimeout(greet, 1000, "Riya", "How are you doing today!");

//Set-Timeout is used at those places
//where the website asks the user to fill up the signup form
//just a few ms after opening of the website

