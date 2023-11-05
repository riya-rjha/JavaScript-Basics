//Get userEmails after fetching data
const getAllUserEmails = async() => {
    const getData = await fetch('https://jsonplaceholder.typicode.com/users/');
    const jsonData = await getData.json();
    const userEmailArray = jsonData.map(user => {
       return user.email;
    });

    postToWeb(userEmailArray);
    //returns only emails
    // console.log(userEmailArray);
    // return userEmailArray;
}

// console.log(getAllUserEmails());
//Promise -> Pending : As log statment is not inside function and thus not awaiting the promises to be fulfilled


const postToWeb = (data) => {
    console.log(data);
}

getAllUserEmails();