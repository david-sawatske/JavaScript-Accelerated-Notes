var pi = Math.PI;
console.log(pi); // => 3.141592653589793

var e = Math.E;
console.log(e); // => 2.718281828459045

var a = -4;
console.log(Math.abs(a)); // => 4

a = 3.4;
console.log(Math.round(a)); // => 3

a = 3.159;
console.log(Math.ceil(a)); // => 4

a = 3.959;
console.log(Math.floor(a)); // => 3

a = 2;
console.log(Math.exp(a)); // => 7.3890560989306495     e**2

var e = Math.E;
console.log(Math.log(e)); // => 1   the natural log of e is 1

console.log(Math.max(1, 3, 7, 2, 99, 5)); // => 99
console.log(Math.min(1, 3, 7, 2, 99, 5)); // => 1

console.log(Math.random()); // => ?    float between 0 and 1

// to get a random whole number 1..100
var rand = Math.floor(Math.random() *  100) + 1; // => ?    float between 0 and 1
console.log(rand); // => 86
