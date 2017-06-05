var a = 2;
var b = 5;
var c;
var d = 1000;

for (var i = 0; i < 5; i++) {
    if (i > a && i < b) {
        c = 1000;
    }
    if (i === 3) {
        d *= 2;
    }
}
// use chrome dev tools to step through code by setting break points etc

// can also log for quick debugging
console.log(a);
console.log(b);
console.log(c);
console.log(d);


// Use 'try' 'catch' statements for errors related to 3rd parties
//  => reaching out to an API

try {
  // the code on which an attempt to execute will happen, possily with error
} catch (error) {     // what to do if there is an error
  console.log(error); // you can use the error in this code execution
} finally {  // this should always get executed
  console.log('finally')
}
