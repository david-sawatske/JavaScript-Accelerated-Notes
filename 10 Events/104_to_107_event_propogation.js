// green square with yellow inner square

var inner = document.quertSelector('#inner');
var outer = document.quertSelector('#outer');

inner.addEventListener('click', innerListener);
inner.addEventListener('click', outerListener);

function innerListener(event) {
  console.log('clicked inner');
};

function outerListener(event) {
  console.log('clicked outer');
};

// where does the (event) argument come from?
// => JS passes the event object automatically to listeners
//    - the object depends on type of event (each with own props and methods)


// when yellow (inner square) is clicked, both are logged
// => 'clicked inner'
//    'clicked outer'

// when green (outer) is clicked, just outer message is logged
// => 'clicked outer'

// Why? Events in JS propogate
//  => clicking on yellow means that you also click on the green below
//     - yellow is nested in green

// only want to click on yellow? stop propgation
//  => no other listeners will get a chance to handle it
function innerListener(event) {
  event.stopPropogation();
  console.log('clicked inner');
};

// check if element has layers of elements above (will bubble up to others)
function innerListener(event) {
  console.log(event.bubbles); // => returns boolean
  console.log('clicked inner');
};


// use 'event.target' to get the object on whch the event happend
function innerListener(event) {
  console.log(event.target); // => returns the target object
  event.target.style.backGroundColor = 'red'; // you can do things with the
};                                            // element at runtime

// 'event.clientX' 'event.clientY' extracts where the event happened
function innerListener(event) {
  console.log(event.clientX,
              event.clientY); // => returns the x,y positions of the click
};


// Changing Propogation Order //

inner.addEventListener('click', outerListener, true);
// the third parameter tells JS that it should have priority
