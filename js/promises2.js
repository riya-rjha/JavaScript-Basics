//Fetch API
//Callbacks, promises, thenables, Async/Await
//Promises - I will surely execute your code
//3 States : Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Yes! We have successfully resolved the promise!");
    }
    else {
        reject('Nope! Something went wrong!');
    }
});

// console.log(myPromise);

myPromise.then(value => {
    return value = 1;
})
myPromise.then(error => {
    console.log(error);
})


// Using thenables with resolve and reject

// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("My nextPromise resolved!");
//     }, 3000);
// })

// myNextPromise.then(value => {
//     console.log(value);     // My Next Promise Resolved!
// })

// myNextPromise.then(error => {
//         console.log(error);    // Nope! something went wrong...
//     })

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("My nextPromise resolved!");
    }, 3000);
})

//using then and catch
myNextPromise
    .then(value => {
        console.log(value);     // My nextPromise resolved!
    })
    .catch(error => {
        console.error("Oops! Something went wrong...", error);
    });


//Fetch API
//thenables to avoid callBack hell
//callBack hell prepares a stack of all statements
//affect the readability and distribution of code
//to avoid callBack hell we use thenables
//but we also do not require too many thenable statements
const users = fetch('https://jsonplaceholder.typicode.com/users/')
    //.then used for users - method
    .then(response => {
        return response.json();
    })

    //forEach() calls a function for each element in an array
    .then(data => {
        data.forEach(element => {
            console.log(element);
        });
    })

//Async / Await
//Awaiting for all the promises to be fulfilled

//await keyword can only be used inside an async function
//async and await make promises easier to write
//async is same as resolve
//await makes the function wait to get a resolved promise

const myUsers = {
    myUserList: []
}

const myFunct = async () => {
    const responsesFromFetch = await fetch('https://jsonplaceholder.typicode.com/users/');
    const resData = await responsesFromFetch.json();
    return resData;
}

const myAnotherFunc = async () => {
    const data = await myFunct();
    myUsers.myUserList = data;
    console.log(myUsers.myUserList);
}

myAnotherFunc(); //meanwhile it is awaiting the data, log statement is executed
console.log(myUsers.myUserList);//log statement does not wait for the promises to get resolved