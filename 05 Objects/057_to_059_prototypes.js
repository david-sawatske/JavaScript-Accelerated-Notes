var p1 = {
  name: 'Max',
  age: 20,
};

// finding objects prototype (don't use in production)
//  => part of browsers, not JS
console.log(p1.__proto__); // => {}   ie Object.prototype

// prototypes have methods that are built into all objects
//  => JS's version of inheritence

// adding a function to the default Object.prototype (which is itself an object)
Object.prototype.greet = function() {
  console.log("My name is " + this.name); // 'this' refers to the immedeate obj
};

p1.greet(); // => 'My name is Max'
// 1. JS parser looks for greet method on the object p1, not found
// 2. up the proto chain to Object.prototype, found and executed
//    - would have thrown error if not defined w/in the chain

var p2 = Object.create(p1); // sets p1 as proto for p2
p2.name = 'Anna';

p2.greet(); // => "My name is Anna"     the 'this' keyword refers to the object
            //                           on which the function is being called

// Showing protype chain
console.log(p2.__proto__ == p1); // => true      as we defined when creating p2
console.log(p2.__proto__.__proto__ == Object.prototype); // => true == p1.__proto__

// Finding prototype in production? 'safer' way to compare
console.log(Object.getPrototypeOf(p2) == p1);  // => true
