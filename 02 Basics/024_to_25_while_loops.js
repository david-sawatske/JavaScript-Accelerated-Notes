var num = 5;

while (num < 7) {    // until this is no longer true
  console.log(num);
  num ++;
}
// => 5
//    6


var i = 2;
var condition = true;

while (condition) {
  if (i == 3) {
    condition = false; // after this is set to false, the loop is continued,
  }                    // running the code below one more time
  console.log(i);
  i++;
}
// => 2
//    3
