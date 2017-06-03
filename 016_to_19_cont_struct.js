// Control Structures ??

// if Statements
var condition = true;

if (condition) {
  console.log('Executed'); // 'Executed' - the condition == true, info is logged
}

condition = false;
var anotherCond = true;

if (condition) {
  console.log('Executed'); // not run when condition is false
} else if (anotherCond){
  console.log('Still executed'); // => 'Still executed'
} else {
  console.log('Nothing executed'); // would run in above statements were false
}

// Numbers and Booleans
//  => only 0 and 1 have boolean vals, rest are treated as true (neg as well)
//   1 == true & 0 == false & 2 == false (but fulfills if condition)
var numCond = 2

if (numCond) {
  console.log('Exe'); // => 'Exe' - 2 is not true, but enough to fulfill if cond
} else {              //            - as long as not 0, fulfills condition
  console.log('Not');
}

// null as a condition is treated as false
//'strings' are treated as true


// Switch Statements

var luckyNumber = 8;

switch (luckyNumber) {
  case 1:
    console.log('is 1');
    break;
  case 8:
    console.log('is 8');
    break;
  default:
    console.log('default'); // shown if no cases are met
    break;  // considered a 'false through' if not present throughout
}           // would log true case all values below it
