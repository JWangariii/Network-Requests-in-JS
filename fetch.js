// SETTING HTTP HEADERS
fetch("api/events")
  .then((response) => response.json())
  .then((events) => showEvents(events));

// SETTING HEADERS WITH HASHTABLES
fetch("api/events"{
    method: 'GET',
    headers: {
        accept : 'text, xml'
    }
})
  .then((response) => response.text())
  .then((events) => console.log(events));

// ARBOTING REQUESTS
const controller = new AbortController();
// communicates with fetch to abort
const signal = controller.signal;
fetch(url, {signal: signal});
controller.abort();