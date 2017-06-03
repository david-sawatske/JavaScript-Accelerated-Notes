// Create var w/o var keyword?
var1 = 5
console.log(var1) // => 5 JS engine automatically creates var and assigns to
                  //    the global scope
//  => works w/ decrease performance
//  => would not work in "use strict" mode


// Dynamic Typing - variables may change their types
var var1 = 5;
console.log(var1);   // => 5

var1 = '10';         // var is not needed when reassigning, only when declaring
console.log(var1);   // => '10'

// Hoising - set variables before their declaration
//  => the parser runs through code an sets vars to 'undefined'

var1 = 5;          // the placement assignment matters (before its called)
console.log(var1); // => 5

var var1;          // decloration placement is not important
