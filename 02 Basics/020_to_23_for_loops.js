//  for Loops

for (var i = 0; i < 5; i++) {
  console.log(i);
}

// => 1
//    2
//    3
//    4

// nested for Loops
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 30; j+=10) { // this code gets run for every round of the
    console.log(i * j);            // loop above
  }
}

// => 0   zeros returned is 1 for orig loop + n times the second loop is run
//    0
//    0
//    0   here i is 1, but j is 0
//    10  j is incremented +10
//    20
//    0   here i is 2, j === 0
//    20
//    40  j is incremented +10 * 2 loops * 2 i's value

// continue & break
for (var i = 0; i < 5; i++) {
  if (i == 1) {
    break;
  }
  console.log(i);
}
// => 0 - breaks out of loop when i === 1, so only 0 gets logged

for (var i = 0; i <= 3; i++) {
  if (i == 1) {
    continue;
  }
  console.log(i);
}
// => 0
//    2  1 is skipped
//    3


for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 2; j++) {
    if (i == 1) {
      continue;
    }
    console.log('inner loop, j = ' + j);
  }

  console.log(i);
}

// => inner loop, j = 0
//    inner loop, j = 1
//    0
//    1  - no string is retured here because of the continue when i === 1
//    inner loop, j = 0
//    inner loop, j = 1
//    2
//    inner loop, j = 0
//    inner loop, j = 1
//    3

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 2; j++) {
    if (i == 1) {
      break;
    }
    console.log('inner loop, j = ' + j);
  }

  console.log(i);
}

// => inner loop, j = 0
//    inner loop, j = 1
//    0
//    1  - same as above, only breaking out of inner loop when i === 1
//    inner loop, j = 0
//    inner loop, j = 1
//    2
//    inner loop, j = 0
//    inner loop, j = 1
//    3
