// Closures - functions defined in other functions which have access to the
//            variables of the outer function
//            => they are aware of their enviornment


function generator(input) {
  var number = input;
  return function() {         // anonymous function (we never call from outside)
    return number * 2;
  };
}

var calc = generator(900);
console.log(calc);
// since we are binding the return function to calc, it returns that function
// => function () {
//      return number * 2;
//    }

// to run the code in the closure, we must invoke it
console.log(calc()); // => 1800
// the intersting part is that the anonymous return function stores the val for
// the input variable (900) at the time the anonymous funciton was returned and
// keeps it until the anonymous funtion is called
//  => it is aware of it's enviornment and stores the vars within it
//  => even if the generator fuction were to be run again, the prev closure
//     is not effected. it keeps the specific env at the time it was run.



// Immedeatly Invoked Funciton Expressions
//   => get executed immedeatly when executing the JS file

function calcNotRun() {
  console.log('Calc');
}
// => nothing is run because this function is not executed

// IFFE time!
(function calc(input) { // a value can be passed to IFFE
  console.log(input);
})('Calc');
// => 'Calc'      this function is executed immedeatly
//    - the advantage here is that the function is executed in the local scope
console.log('Calc'); //
// => would polute the global scope
//    - may interfere with variables from 3rd party package


var obj = {};             // defined on the Global Scope
(function func1(input) {
  obj.name = 'Max';       // changing the object within the IFFE
})(obj);                  //  - not creating a new object

console.log(obj); // => { name: 'Max' }   returns object with new name property
//                                        with a call to in on the Global Scope
