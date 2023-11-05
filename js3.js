function signIn(){
    console.log("Please enter credentials!")
    console.log("It will hardly take a few seconds");
    time = new Date();
    console.log(time);
    document.getElementsByClassName('signUPbox').innerHTML = time;
}

setTimeout(signIn,5000);

