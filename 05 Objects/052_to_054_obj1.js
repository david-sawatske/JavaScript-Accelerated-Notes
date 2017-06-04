// objects have property key value pairs for properties
//  => think of key as a variable
//  => val can be anything that can be assigned to a variable

// using object literal syntax
var person = {
  "first-name": 'Max',   // property names can be strings
  age:  27,              //   => useful when dynamically generating prop names
  details: {             // can have another obj as property within the orig obj
    hobbies: ['sports', 'cooking'],
    location: 'Germany'
  },
  greet: function() {    // objects can have functions
    console.log('Hi');
  }
};
console.log(person); // => { "first-name": 'Max', age: 27 } the whole object
console.log(person.age); // => 27 just the age attribute

// if you need to find val of attribute based on a dynamically derived var
var field = "first-name";   // not dynamic, but you get the point
console.log(person[field]); // => 'Max' just the "first-name" attribute

console.log(person.details.hobbies); // => [ 'sports', 'cooking' ]

person.greet(); // => 'Hi'

//
var person2 = {
  name: 'Tom',
  age:  33,
  details: {
    hobbies: ['reading', 'climbing'],
    location: 'USA'
  },
  greet: function() {
    console.log('My name is ' + this.name); // specify the prop of the obj (this)
  } // if were were to just say name, JS would look for a var 'name'
};  // after exausting the scope chain, it returns an error

// you can change objects after their creation
person2.name = 'Thomas';
console.log(person2);

// => { 'first-name': 'Tom',
//      age: 33,
//      details: { hobbies: [ 'reading', 'climbing' ], location: 'USA' },
//      greet: [Function: greet],
//      name: 'Thomas' }

person2.greet(); // => 'My name is Thomas'


// another way to create an object
var anotherPerson = new Object();
anotherPerson.name = 'Anna';
anotherPerson.age = 30;
