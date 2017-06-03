// Addition //
var a = 'join ';
var b = 3;
var c = true;
var d = [1,2];
var e = '12';
var f = null;
var g = undefined;

console.log(a + b); // => 'join 3'
console.log(b + a); // => '3 join'        // JS engine sees that math is not
                                          // possible, so it creates a string
console.log(a + c); // => 'join true'
console.log(a + d); // => 'join 1,2'
console.log(e + b); // => '123'
console.log(b + c); // => 4                // true == 1 in calculations
console.log(f + g); // => NaN              // here calculation fails


// Subtraction //
console.log(a - 'in'); // => Nan           // JS cannot subtract strings
console.log(e - b);    // => 9             // but here it sets str to number
// NaN, null and undfined behave the same as addition


// Mult, Division & Mod//
a = 1.3;
b = 2;
c = 2.2,
d = null

console.log(a * b); // => 2.6                 // as expected
console.log(a * c); // => 2.8600000000000003  // JS bug
console.log((a * c).toFixed(2)); // => 2.86   // JS bug fix
console.log(a * d); // => 0                   // null is interpreted as 0
// NaN, null and undfined behave the same as addition

a = 3.3;
console.log(a /c); // => 1.4999999999999998
console.log((a /c.toFixed(2))); // => 1.50    // rounds correctly

a = 10;
b = 3;
console.log(a % 3); // => 1                   // gives remainder

b = 0;
console.log(a / b); // => Infinity            // gives the 'limit number'

b = Infinity;
console.log(a / b); // => 0               
