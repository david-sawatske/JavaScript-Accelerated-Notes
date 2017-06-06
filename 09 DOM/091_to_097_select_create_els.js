// Query Selector - uses CSS selectors to find elements

console.log(document.querySelector('h1')); // selects all <h1> elements

console.log(document.querySelector('.className')); // first el of that class
console.log(document.querySelectorAll('.className')); // array of all els of class


// Examples
// can also change attributes using these selectors
document.querySelector('#idName').style.backgroundColor = 'red'; // el by ID

// select the second <a> tag with the class .className and change text to blue
document.querySelectorAll('.className')[1].style.backgroundColor = 'blue';
// 1. select all with that class name
// 2. take the second element from the array that is returned [1]

// change the text content of the first link to "changed text"
document.querySelector('li').firstChild.textContent = 'changed text';


// Creating New Elements //
var p = document.createElement('P'); // tag name as argument
// => the el is created, but not yet part of the DOM
// => we can access all of the properties, even though not yet in DOM
p.textContent = 'This is the new paragraph';
p.style.fontSize = '17px';

// let's add it after the first link in the <ul>
var a = document.querySelector('a'); // selects the 1st <a> tag
// inserting the paragraph
a.appendChild(p); // upon inspection, this makes it a part of the <a> tag, not after

// we want to append to the <li> item, on the <a> within the <li>
var li = document.querySelector('li');
// insert again
li.appendChild(p);

// how about before the first li?
//  => additionally, we need to tell before what item to insert
a = li.firstElementChild; // <a> a is the first child of the <li> item
li.insertBefore(p, a);     // (what to insert, before what to insert)



// Deleting Elements //

// let's remove the second link
var a = document.querySelectorAll('a')[1];

// Cross browser method
a.parentElement.removeChild(a);

// Newer browser functionality
a.remove();


// Nodes //
// => the DOM is built of nodes
// => some elements are nodes

var a = document.querySelectorAll('a')[1];

a.parentNode.removeChild(a); // same as parentElement, in this case
// => but nodes can be other things in the DOM that are not elements
