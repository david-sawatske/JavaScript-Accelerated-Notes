// Scope //
// where the variables are 'registered'

// Global Scope - window in the browser
//  => the highest level

// Local Scope - created when a function is created
//  => can only use els defined in local scope in the local scope

var test1 = 'global scope';

function localScope() {
    var test1 = 'local scope'; // creates new var obj in the local scope
    console.log(test1);
}

localScope();       // => 'local scope'
console.log(test1);  // => 'global scope'



function localScope() {
    test2 = 'local scope';  // JS auto generates a new global variable when
    console.log(test2);     // var has not been declared before
}

localScope();       // => 'local scope'
console.log(test2); // => 'local scope'
