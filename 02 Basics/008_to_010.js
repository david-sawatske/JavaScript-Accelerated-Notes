var variable = true;
console.log(variable);

// Data Structures
// number, string, boolean, array, null, NaN

// no floats or integers in JS, only numbers
var integer = 5;
console.log(typeof integer); // => number

var float = 5.5;
console.log(typeof float); // => number

var notNumber = NaN;
console.log(typeof notNumber); // => number - seen in math calc errors

// null vs undefined
console.log(null == undefined);  // => true - values are equal
console.log(null === undefined); // => false - but types are not
//  => null is an object while undefined is undefined

// Creating JS objects
var var1 = {
  // properties - ie values inside object
  // methods - ie functions inside object
};

var var1 = {
  name: 'Max'
};
console.log(var1) // => { name: 'Max' }
console.log(var1.name) // => 'Max'
