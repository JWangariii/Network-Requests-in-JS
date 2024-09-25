// METHODS
// configure requests
XPathResult.open("GET", "api/events");

// send requests
xhr.send();

// abort
xhr.abort();

// GET request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "api/events",
  // means async
  true
);
// event handler should be before send
xhr.onload = () => console.log(xhr.responseText);

xhr.send(null);

// POST request
const xhr = new XMLHttpRequest();
xhr.open("POST", "api/cart", true);
xhr.setRequestHeader("content-Type", "application/json");
xhr.onload = () => console.log(xhr.responseText);
xhr.send("{id:42, quantity:1}");

// TIMEOUTS
xhr.timeout();

// set if time has passed(an error msg)
xhr.onTimeout();
