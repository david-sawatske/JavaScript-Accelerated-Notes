var today = new Date();
console.log(today.toString()); // => Mon Jun 05 2017 15:51:22 GMT-0700 (PDT)

var anotherDate = new Date(2020, 6, 22);  // month starts at 0 6 == July
console.log(anotherDate.toString()); // => Wed Jul 22 2020 00:00:00 GMT-0700 (PDT)

var anotherDate = new Date(2020, 11, 32);  // automaticlly goes to next month
console.log(anotherDate.toString()); // => Fri Jan 01 2021 00:00:00 GMT-0800 (PST)

// string as argument (must be valid - check MDN)
var anotherDate = new Date('1986/9/10');  // months are standard numbers
console.log(anotherDate.toString()); // => Wed Sep 10 1986 00:00:00 GMT-0700 (PDT)

console.log(Date.parse('1986/9/10')); // => 526719600000  num of ms since 1/1/1970

console.log(today.getDate()); // 5    it's the 5th of June
console.log(today.getDay()); // 1     Sunday = 0, Monday = 1 ...
