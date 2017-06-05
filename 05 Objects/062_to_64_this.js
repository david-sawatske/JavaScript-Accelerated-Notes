function fn() {
  console.log(this);
}

// fn(); // returns the window object (because 'this' refers to global scope)


var obj = {
  objfn: fn      // pulls a reference of the above funtion to the current function
};

obj.objfn() // => { fn: [Function: fn] }    logged because the 'this' is in
//                                          reference to the var obj object

// 'this' changes value to whatever object is calling the thing in which 'this' is used

// to keep the original value for 'this', use the bind function

obj.obfn.bind(x, y, z)(); // x == whatever object you want 'this' to refer to
                          // y z == are additional arguments that obfn method
                          //        may take, two in the example
// with bind, you can bind the 'this' value and use it later

obj.obfn.call(x, y, z);   // also calls function but does not need parenthesis
// call does not allow 'this' to be used later as it is run instantly

obj.obfn.apply(x, [y, z]); // like call, but args are passed in as an array
