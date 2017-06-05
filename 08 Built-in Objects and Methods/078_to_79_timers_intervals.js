// setTimeout(x, y); - is a method on the Window object that waits and executes
//  => x = function to execute (can be closure or not)
//  => y = time in ms to wait
//  => helps to control user experience

setTimeout(function() {
  console.log('finished');
}, 2000);

// => 'finished'    after 2ms


// setInterval(x, y); - is a method on the window object that exe in intervals
//  => x = function to execute (can be closure or not)
//  => y = the function will executed every y ms

setInterval(function() {  // this would run indefinately
  console.log('Ping!');
}, 500);

// Use combination of methods to stop intervals

var interval = setInterval(function() {  // this would run indefinately
  console.log('Ping!');
}, 500);

setTimeout(function() {
  clearInterval(interval);  // cI is another method on Window obj
}, 2500);

// => Ping!        // the cI method is run after 2500 ms when the setTimeout
//    Ping!        // method is run, stoping the otherwise infinate sI function
//    Ping!
//    Ping!
