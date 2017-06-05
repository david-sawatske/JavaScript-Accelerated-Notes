function funct1(message) {
  console.log(message);
  console.log(arguments);          // returns passed in arguments
  console.log(arguments[1]);       // returns passed in arg at idx 1
  console.log(arguments.length);   // returns num of args passed
}

funct1('Hi', 10);
// => 'hi'
//    { '0': 'Hi', '1': 10 }  an object with k/v pair of index and passed in args
//    10                      - not an error with extra argument
//    2                       - you can access additional arguments at runtime
//                              by index and use them
//                            - allows the function to be more dynamic



function funct2(message) {
  console.log(message);
}

var whatFunction = funct2;
console.log(whatFunction.name); // => funct2  why? if function names are generated
                                //            dynamically at runtime/ unknown

console.log(whatFunction.length); // => 1     refers to the num of args the
                                  //          function expects


var funct3 = function (message) {
  console.log(message);
};

console.log(funct3.name); // => funct3  *expected ''?*


function funct4(message) {
  console.log(this.name);
};

funct4(); // 'this' will refer to the Global object, not to the function
          //  => you can get the name of the funct outside of it, but not inside
