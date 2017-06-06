// AJAX/ XMLHttpRequest //
//  => allows you to reach out to the web to load or post data with JS
//  => will use jQuery library instead of what's below

var http = new XMLHttpRequest();
var url = 'http://jsonplaceholder.typicode.com/posts'; // returns dummy objects
var method = 'GET';

// open the HTTP request (prepared, but not sent)
http.open(method, url);

// sending the HTTP request
http.send();

// onreadystagechange event handler for when the request comes back
// set up if statement to see if the request was done and successfull
//  - use built in properties readyState, status
http.onreadystagechange = function() {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
    console.log(JSON.parse.http.responseText); // turns response to JS object
  } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
    console.log('Error');
  }
};
