var a = '5';
console.log(parseInt(a)); // => 5    as an integer

var a = 'FB123';
console.log(parseInt(a)); // => NaN

var a = 'FBB123';  // but we can specify the base number system we are using
console.log(parseInt(a, 16)); // => 16494883   hexadecimal (16 base) to an integer

var a = 5;
console.log(a.toString()); // => '5'  toString is a method on the Object.prototype
                           //           - the base prototype of all objects

 var a = 5.645425;
 console.log(a.toFixed(3)); // => 5.645   specify the decimal places in argument


// Strings //

var str = 'string of text';

console.log(str[2]); // => 'r'
console.log(str.charAt(2)); // => 'r'

console.log(str.concat(' and some additional')); // => 'string of text and some additional '
console.log(str); // => 'string of text'  original not mutated

console.log(str.toUpperCase()); // => 'STRING OF TEXT'

console.log(str.split(' ')); // => [ 'string', 'of', 'text' ]   split on ' '

str = '   string of text        ';
console.log(str.trim()); // => 'string of text'   elminates edge whitespace
// => great for user input
