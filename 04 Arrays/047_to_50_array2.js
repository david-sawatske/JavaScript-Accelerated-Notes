// Filter //
var arr1 = [1,2,3,4,5,6]

console.log(arr1.filter(function(value) { // runs on each el of array
  return value > 2;                       // tells filter method w/ boolean
}));                                      // whether to include el
// => [ 3, 4, 5, 6 ]
//  - new array created (original not changed)

// Map //
console.log(arr1.map(function(el) {
  return el * 10;
}));
// => [ 10, 20, 30, 40, 50, 60 ]
//  - new array created (original not changed)


// Reverse //
console.log(arr1.reverse());
console.log(arr1);
// => [ 6, 5, 4, 3, 2, 1 ]  new array NOT created
// => [ 6, 5, 4, 3, 2, 1 ]  the original array is modified


// Concat and Join //
var arr2 = ['join', 'me']
console.log(arr1.concat(arr2));
// => [ 6, 5, 4, 3, 2, 1, 'join', 'me' ] new array created (originals not mutated)

console.log(arr1.join(arr2));
// => "6join,me5join,me4join,me3join,me2join,me1"
// - joins the array as a string, the second arg is the seperator

console.log(arr2.join(" ")); // => "join me" more common useage

// Reduce //
// reduces array to a single value (recursive function)
console.log(arr1.reduce(function(total, value) { // anon funct gives the logic
  return total + value;                          // by which it should be reduced
}));
// => 21
