// Equal //

console.log(0 == false); // => true       -value of false is 0
console.log(0 === false); // => false     -value and type comparison

console.log(11 == '11'); // => true       -value comparison, JS converts string
console.log(11 === '11'); // => false     -value and type comparison

console.log(11 != '11'); // => false      -value comparison, they are equal vals
console.log(11 !== '11'); // => true      -value and type comparison, not equal

console.log(NaN == NaN); // => false      -build in rule JS

console.log(0 == null);  // => false      -null can't be compared in JS
console.log(undefined == null); // => true -one exception
//  => In JS comparing anything else to undefined returns false


// Greater Thans //

console.log(1 >= '1'); // true
// => we an only check the values and not types
//   - >== not a valid operator (error)
