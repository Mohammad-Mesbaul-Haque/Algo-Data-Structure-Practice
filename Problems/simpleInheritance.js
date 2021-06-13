// prototype is like the recipe for creating an object . 
//defining a supertype function
function Animal() {} ;

//add something in it's prototype chain
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log(`They are animals so various things are in their menu`);
    }
}

// using Object.create method to make instance from Animal ;
let dog = Object.create(Animal.prototype);

console.log(dog.eat());