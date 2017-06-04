var p1 = {
  name: 'Max',
  age: 20,
};

var p2 = {
  name: 'Max',
  age: 20,
};

console.log(p1 == p2); // => false
// => although the properties are identical, the vars point to diff spots in memory
//    - reference types compare the pointers


// Setting prototype for newly created object
var p3 = Object.create(null); // the argument is available to set the prototype
//  => default proto is Object.prototype, p3 has null as assigned

var p4 = Object.create(p1); // assigning the p3's prototype to p1
p4.name = 'Sam';            // assign a property
console.log(p4.age); // => 20 this is an inherited property from the proto (p1)
