// Primitive Types //
var a = 5;                  // -------> spot 1 in memory, variable holds value 5
var b = a;                  // -------> spot 2 in memory with 5 copied to it

a = 10;                     // -------> spot 1 in memory, now variable holds value 10
console.log(b); // => 5     // b still points to spot 2 in memory, holds prim val 5



// Reference Types (objects) //

var c = {a: 5};              // the object is stored in memory and the variable
                             // does not hold the value of the object
                             //   => var holds a pointer pointing to the value

var d = c;                   // not coping oject to memory, but the pointer

// *objects can be complex and would pollute memory if they were constanly copied


var arr = [1,2,3];
var another = arr
console.log(typeof arr); // => object (reference type)
console.log(arr);        // => [1,2,3]
console.log(another);    // => [1,2,3]

arr = [4,5,6]            // this is the creation of a new object and sets the pointer
console.log(arr);        // => [4,5,6]
console.log(another);    // => [1,2,3]  - another still points to the original obj

var arr = [1,2,3];
var another = arr
arr.push(4)              // mutates the array object, but it is still the same obj

console.log(arr);        // => [ 1, 2, 3, 4 ]
console.log(another);    // => [ 1, 2, 3, 4 ]
