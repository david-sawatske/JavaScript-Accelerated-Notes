// Document Object - another object on the window property
//  => holds complete DOM and other properties, methods and events

console.log(document.URL);
console.log(document.title); // => title of page (what is shown in tab itself)

console.log(document.body); //  => the DOM and events
console.log(document.body.children); //  => array of all  HTML tags as objects
                                     //     as translated by the browser


console.log(document.body.children[0]); // => <h1>Javascript Bootcamp</h1>
// the <h1> is the first child of the body
//  - you can access any of the properties available to that DOM object
//  - the properties depend on what type of HTML element it is

console.log(document.body.children[0].textContent); // => 'Javascript Bootcamp'
// note the invocation does not require ()

// you can also change the objects
document.body.children[0].textContent = 'Something Else!';
//  => this is how you interact with the DOM to change it at runtime
//     - no need to reload from the server, just change the existing page

// and their styles
document.body.style.backgroundColor = 'red';


// Navigating the DOM
console.log(document.body.firstChild); // => data:"↵  "
//  => the whitespace before the ul

console.log(document.body.firstElementChild); // => the unordered list

console.log(document.body.firstElementChild.nextElementSibling); // => 2nd  li
