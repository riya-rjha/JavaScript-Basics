//different errors in JS

//reference error
//variable is not defined

//syntax error
// Object..create();
//catch this error

const func = () => {
    try{
        const name = "riya";
        name = "RiYA";
    }
    catch(err){
        console.log(err); //type error
    }
}


//console.error() - type error
//console.warn() - warning
//console.table() - logs the property as table with error value


//err.name - type error
//err.message - assignment to constant variable
//err.stack - all details 

// logTheError()


//Creating our own custom error object
const makeError = () => {
    let i = 1;
    while(i<=5){
        try {
            if(i%2!=0){
                console.log("Odd number!");
                throw new Error('This is a generic error');
            }
            //executed if no error thrown
            console.log("Even number");
        }
        catch (err) {
            console.error(err.stack);
        }
        //finally block will still execute 
        //no matter if there is an error or not
        finally {
            console.log("....finally!");
            i++;
        }
    }
    
};
makeError();

function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name} : ${this.message}`;
}


//on removing customError we get only error and not custom error