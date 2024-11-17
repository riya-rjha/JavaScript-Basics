//Objects & Classes
class Pizza {

    //private fields start with a #
    #sauce = "tomato";
    type = "Non-veg";
    #size;
    constructor(size, crust) {
        this.#size = size;
        this.crust = crust;
    }

    setPizza(crust) {
        this.crust = crust;
    }

    getPizza() {
        return this.crust;
    }
}

const myNewPizza = new Pizza("large");
console.log(myNewPizza.setPizza());
 

//creating child class
class newPizzaChildClass extends Pizza {
    constructor(pizzaSize, pizzaCrust) {
        super(pizzaSize, pizzaCrust);
        this.pizzaSize = pizzaSize;
        this.pizzaCrust = pizzaCrust;
    }

    slice() {
        return `A flat 20% off on ${this.crust} and ${this.size} pizza!`
    }
}

const pizzaMania = new newPizzaChildClass("medium", "soft");
console.log(pizzaMania.slice());
console.log(pizzaMania.crust);

const pz = new Pizza("pepperoni", "small");
console.log(pz.getPizza());

const ObjCreation = {
    delivery: "true",
    type: "pepperoni",
    crust: "thin",
    size: "medium",
    price: [100, 200, 400],
    timing: function () {
        return "Helloo";
    }
};

console.log(ObjCreation.price);
console.log(ObjCreation.delivery);
console.log(ObjCreation.type);
console.log(ObjCreation.timing());

//implementing super, this, extends keywords
//Accessing key value pairs
//Getters & Setters
const StarBucks = {
    item: "Coffee",
    price: [100, 150, 300],
    flavour: "Chocolate Oreo ",
    type: "Shake",
    timing: function () {
        return `Delivery expected of ${this.flavour}${this.item} ${this.type} within 15 minutes`;
    }
}

const strawberry = Object.create(StarBucks);
strawberry.item = "Drink";
strawberry.price[1] = 200;
console.log(strawberry.price);
console.log(strawberry.timing());
strawberry.timing = function () {
    return "Too late than expected!";
}
console.log(strawberry.timing());

const chocolate = Object.create(strawberry);
console.log(Object.keys(StarBucks));
console.log(Object.values(StarBucks));

//for in loop
//to access key value pairs
for (let i in StarBucks) {
    console.log(`Value for key ${i} is ${StarBucks[i]}`);
}

delete StarBucks.flavour;
let ans = StarBucks.hasOwnProperty('flavour');
console.log(ans);

class Burger {
    constructor(type, size, cheese) {
        this.size = size;
        this.type = type;
        this.cheese = cheese;
    }
    oven() {
        console.log(`This is a burger of ${this.size} size and loaded with ${this.cheese} cheese and of ${this.type} type.`);
    }
    //getters
    get getBurger() {
        return `${this.size} size and loaded with ${this.cheese} and of ${this.type} type`;
    }

    //setters
    set setBurger(newCheese) {
        this.cheese = newCheese;
    }
}

const myBurger = new Burger("Veg", "Small", "Mozarella");
myBurger.oven();
//setters
myBurger.setBurger = "sliced";
//printing getters
console.log(myBurger.getBurger);
myBurger.oven();


//Factory notation - return objects after creation of new objects
function pizzaFactory() {
    const type = "non-veg";
    const size = "large";
    return {
        bake: () => console.log(`Your ${type} and ${size} size pizza is available for free!`)
    };
}

const newObjCreation = new pizzaFactory();
console.log(newObjCreation.bake());

