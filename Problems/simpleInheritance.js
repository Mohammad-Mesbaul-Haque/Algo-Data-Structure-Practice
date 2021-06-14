// prototype is like the recipe for creating an object . 
// When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

//ChildObject.prototype = Object.create(ParentObject.prototype);


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