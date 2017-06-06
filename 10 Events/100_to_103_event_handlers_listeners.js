// Event Object //

window.onload = function() {
  console.log('window loaded');
};
// 1. add event handler using onload property on window object
// 2. assign a anonymous function that handles loading event, when it occurs
//    - when window loads, the function is executed
// onload is good for initialization tasks as the window is successfully loaded

// Single handler for single listener

// to handle a click event on a button on the page
// 1. select the button and assign to var
var btn = document.querySelector('button');
// 2. write onclick event handler with desired function when clicked
btn.onclick = function() {
  console.log('clicked');
};

// you can add an event handler on any HTML element
document.onclick = function() {
  console.log('clicked anywhere');
};
// with this the message is logged when clicking anywhere on the page


// Event Listeners //

function listener1() {
  console.log('l 1');
}

function listener2() {
  console.log('l 2');
}

// add the Event Listeners to code
//  => addEventListener(x, y) is available to all HTML elements
//     - x = the name of the event to listen to
//     - y = reference to the function to execute if listener is fired
btn.addEventListener('click',
listener1);

// other listeners can also be added
btn.addEventListener('click',
listener2 );

// if we want remove a listener after a certain amount of time
//  => removeEventListener expects same arguments as add
setTimeout(function() {
  btn.removeEventListener('click', listener1);
},2000);
