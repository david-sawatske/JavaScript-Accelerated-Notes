// Document Object Model - created from the HTML code
//  => see on any page with dev tools- elements tab

// The Window Object (Global object in browser)
console.log(window.innerWidth); // => give value in browser of the window container
console.log(outerWidth);        // => innerWidth + borders
                                //   don't need 'window' as we are in the Window obj

console.log(innerHeight);
console.log(outerHeight);

console.log(window); // => shows all of the properties and methods available
                     //    for the window obj, including the DOM

// localStorage saves certain values in browser while the app is running
//   => setItem with key value pairs
localStorage.setItem('key1', 100);
console.log(localStorage.getItem('key1')); // => '100'


// sessionStorage - only persists until user closes tab (unlike localStorage)
sessionStorage.setItem('key1', 100);
console.log(sessionStorage.getItem('key1')); // => '100'

window.open('http://ex.com'); // opens a new window with
