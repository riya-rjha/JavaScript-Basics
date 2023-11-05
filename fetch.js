//second parameter of fetch
//includes information you want to make out with the fetch API Database
//method : "GET" = receives data from fetch API
const getDadJokes = async() => {
    const dataJoke = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET', //request method to get
        headers: {
            Accept : "application/json"
            // Accept : "text/plain"
        } //https headers
    });
    const jokeData = await dataJoke.json();
    // const jokeData = await dataJoke.text();
    console.log(jokeData);
}

getDadJokes();

//method : 'POST'
//adds data into the fetch API
const myNewJoke = {
    id: "05962264418",
    joke : "Why was Harshit not able to write with the pencil? Because it was pointless."
};

const postDadJokes = async (jokeObj) => {
    const response = await fetch('https://httpbin.org/post', {
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}

postDadJokes(myNewJoke);


//Fetch through URLs with changes in the sentence
//'?' identifies where the first parameter is starting
//'&' identifies the use of more than one parameter

// const requestData = async(firstName, lastName) => {
//     const response = await fetch(`http://api.icndb.com/jokes/random?firstName = ${firstName} & lastName = ${lastName}&limitRo = [nerdy]`);
//     const jsonResponse = await response.json();
//     console.log(jsonResponse.value.joke);

// }
// requestData("Riya", "Jha");

//request object
//to get data from the form
//abstract into functions

const getUserDataFromForm = () => {
    const reqObj = {
        firstName : "Riya",
        lastName : "Jha",
        categories : ["nerdy"]
    };
    return reqObj;
}

const buildRequestURL = (reqData)=>{
    return `http://api.icndb.com/jokes/random?FirstName=${reqData.firstName}&LastName=${reqData.lastName}&initTo=${reqData.categories}`;
}

const requestJoke = async(url)=>{
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage = (joke)=>{
    console.log(joke);
}

//Procedural workflow function
const processJokeRequest = async() => {
    const requestData = getUserDataFromForm();
    const requestURL = buildRequestURL(requestData);
    await requestJoke(buildRequestURL);
    console.log("Finished!");
}

processJokeRequest();

