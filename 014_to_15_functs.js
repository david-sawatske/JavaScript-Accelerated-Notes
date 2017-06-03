function calc() {
  console.log('In the funct')
}
// the code gets exicuted instantly, but functions don't get called automatically
calc(); // must be invoked
//  => can also be hoisted

var calc = function() {
  console.log('In the funct')
};
calc(); // => returns 'In the funct', as above

var anotherFn = calc;
anotherFn(); // => => returns 'In the funct', as above
// => executes the function that the var points to

//
function calc() {
  console.log("Inside function");
};
var anotherFn = calc(); // this is assigning a var to the return of the calc fn
console.log(anotherFn); // => undefined - the calc fn does not return anything

function calc() {
  return "Inside function";
};
var returnVal = calc(); // this is assigning a var to the return of the calc fn
console.log(returnVal); // => "Inside function" - the calc fn now returns string

//
function calc(num1, num2) {
  return num1 + num2;
};
var returnVal = calc();  // not passing in arguments. num1 & num2 = undefined
console.log(returnVal);  // => NaN - undefined + undefined = calc error = NaN

var returnVal = calc(10, 8, 33);  // pass in too many args
console.log(returnVal); // => 18 - the last arg in ignored
