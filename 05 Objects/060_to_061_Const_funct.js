// Constructor Function - a function that creates new objects //
//  => used to preconfig properties for objects created by it (blueprint)
//  => capitalize the name of Const Functs

function Person() {
  this.name = "Max";
  this.greet = function() {
    console.log("I'm " + this.name);
  }
}

var p1 = new Person();

console.log(p1.__proto__ == Person.prototype); // => true
// => JS automatically give prototype for objs created by Constructor Functions
//    - Person is the function, objs created by is have Person.prototype proto


// we can add methods to that prototype object
//  => all objs who have that as prototype will have access to that method
Person.prototype.greet = function() {
  console.log("hello");
};

p1.greet(); // => 'hello'
// => this was later overwritten by adding a function to the Const Funct
//    - JS did not need to go to Global context, where this funct is defined


p1.name = 'Anna';    // override the default value for this object only
p2 = new Person();  // creating a new obj using the Funct Const
p1.greet(); // => "I'm Anna"   showing the overwritten name
p2.greet(); // => "I'm Max"    nothing overwritten on this object, shows default


// Method to check if obj was created by specific Constructor Function
console.log(p1 instanceof Person); // => true


// Constructor Function - arguments //

function Another(name, age) {
  this.name = name;
  this.age = age;
}

var tom = new Another('Tom', 33)
console.log(p3);  // => Another { name: 'Tom', age: 33 }   the obj and it's props
