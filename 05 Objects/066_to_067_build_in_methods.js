var person = {
  name: 'Max',
  age:  27,
  location: 'US',
  greet: function() {
    console.log('Hello');
  }
}

delete person.location;
console.log(person.location); // => undefined

console.log('name' in person); // => true
// checks if 'age' exists as a property within person
//  - case sensitive

// Loop through all of the properties of an object
for (var field in person) { // 'field' can be anything
  console.log(field);
}
// => "name"
//    "age"
//    "greet"

// we are getting the name for field dynamically, as discussed before
for (var field in person) {
  console.log(person[field]); // retrieves all of the values
}
// => Max
//    27
//    [Function: greet]
