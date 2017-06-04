var array = [1,2,3];

array.forEach(function(el) { // for each el, the anonymous function is executed
  console.log(el);
});
// => 1
//    2
//    3


array = [1,2,3,,];
console.log(array); // => [ 1, 2, 3,  ] need second comma to include undefined space

array.push(4);
console.log(array); // => [ 1, 2, 3, , 4 ] push does not take the undefined space

console.log(array.pop()); // => 4 returns the popped el


array = [1,2,3,4,5,6];
console.log(array.indexOf(4)); // => 3

array[array.indexOf(4)] = 'not 4';
console.log(array);  // => [ 1, 2, 3, 'not 4', 5, 6 ]

array = [1,2,3,4,5,6];
var newArr = array.splice(3);
console.log(newArr);  // => [ 4, 5, 6 ] the els at index 3 to the end
console.log(array);   // => [ 1, 2, 3 ] the spliced els are not longer in array

array = [1,2,3,4,5,6];
newArr = array.splice(3, 2); // arg 1 = where to start, arg 2 = num to splice
console.log(newArr)  // => [ 4, 5 ] takes two els starting at index 3


array = [1,2,3,4,5,6];
newArr = array.slice(1, 3) // starting index, ending index (not included)
console.log(newArr); // => [ 2, 3 ]
