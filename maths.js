//Math methods
console.log(Math.PI.toFixed(2));
console.log(Math.trunc(Math.PI));//truncates to integer
console.log(Math.round(3.54));//4
console.log(Math.round(3.1));//3
//ceil, floor, pow, min, max
console.log(Math.ceil(2.71));//rounded off to bigger values
console.log(Math.floor(3.23));//rounded off to smaller values
console.log(Math.pow(2, 8));
console.log("Min : " + Math.min(1, -6, 5, -63));
console.log("Max : " + Math.max(1, -6, 5, -63));

//Random 
console.log(Math.random() * 10 + 1);//write 1 to exclude zero
console.log(Math.random() * 10 + 1);//write 1 to exclude zero

//Return a random character from name
function myName(name) {
    return name.charAt(Math.floor(Math.random() * name.length));
}

console.log(myName("Riya Jha"));

//If-else conditional statements
//Rock-Paper-Scissors Game
/*
let userChoice = prompt('Enter your choice (rock/paper/scissor) : '); //user input
let player = userChoice;
let computer = "rock";
switch (player) {
    case computer:
        console.log("Tie");
        break;

    case "rock":
        if(computer==="paper"){
            console.log("Computer wins");
        }
        else{
            console.log("Player wins");
        }
        break;
    case "paper":
        if(computer=== "scissor") {
            console.log("Computer wins");
        }
        else{
            console.log("Player wins");
        }
        break;

    default:
        if(computer=="rock"){
            console.log("Computer Wins!");
        }
        else{
            console.log("Player Wins!");
        }
}
*/

//creating a yes/no bar for soup available in restaurant
let soup = prompt('Enter if you want soup? (yes/no)');
if (soup == null) {
    alert('Enter a valid answer!');
    let response = confirm('Want to start again?');
    if (response) {
        window.location.reload();
    }
    else{
        alert('Okay. better luck next time!');
    }
}
if (soup.length) {
    if (soup != 'yes') {
        alert('Sorry to hear that! We will be back soon with more options.');
    }
    else {
        alert('We have some delicious soup, thanks for ordering!');
    }
}
else {
    alert('Enter a valid answer!');
}

