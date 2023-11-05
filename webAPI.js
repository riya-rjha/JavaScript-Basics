//Window API - interaction of user written programs with Windows
//not a part of DOM
//always executed anyhow - whether mentioned or no

console.log(window.location);//returns IP Address

const myObject = {
    name : "Riya",
    hobbies: ['code', 'code', 'code'],
    logName : function returnFunc(myName) {
        this.name = myName;
        console.log(`${this.name} is my name`);
    }
}

myObject.logName("Harshit");

//local Storage does not expire
//Session storage expires as soon as the browser window is cleared
const myArray = ['eat', 'sleep', 'code'];
sessionStorage.setItem('newStorageSession', JSON.stringify(myArray));
const newAns = JSON.parse(sessionStorage.getItem('newStorageSession')); //returns as an object
console.log(typeof newAns);
//storages store only string data - myArray
console.log(newAns); //JSON model

localStorage.setItem('myLocalStore', JSON.stringify(myArray));
const anotherAns = JSON.parse(localStorage.getItem('myLocalStore'));

//removal of one Item 
localStorage.removeItem('myLocalStore');
//removal of all data
localStorage.clear();

//if we try accessing the value of 
//not present local Storage then we get null value
//finding no of items in localStorageLink

//Adding items to storage after clear()
const arrNew = [1,2,3];
const arrNew2 = [4,5,6];
localStorage.setItem('arrNewItem1', JSON.stringify(arrNew)) ;
localStorage.setItem('arrNewItem2', JSON.stringify(arrNew)) ;
let len_storage = localStorage.length;
console.log(len_storage);

//key 
const key = localStorage.key(0);
console.log(key);