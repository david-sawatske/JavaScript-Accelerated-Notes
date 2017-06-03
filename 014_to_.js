function calc() {
  console.log('In the funct')
}
// the code gets run, but functions don't get called automatically
calc(); // must be invoked
//  => can also be hoisted

var calc = function() {
  console.log('In the funct')
};
calc(); // => returns 'In the funct', as above

var anotherFn = calc;
anotherFn(); // => => returns 'In the funct', as above
// => executes the function that the var points to
