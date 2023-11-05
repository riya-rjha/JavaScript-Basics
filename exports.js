const f2 = () =>{
    return "This is my Function 2";
}
const f3 = () =>{
    return "This is my Function 3";
}

// export default f1;
//every function is allowed to export exactly one default function
export {f2, f3, f4};

//another way of exporting functions
export default function f4(){
    return "This is my Function 4";
}

export const f5 = () => {
    return "This is my Function 5";
}

export class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
    }

    greeting() {
        return `Hello ${this.name}! Your email id is ${this.email}`;
    }
}
