axios = require("axios");

// GET requests with axios
axios
  .get("api/events")
  // the response
  .then((response) => console.log(response))
  // err handling
  .catch((error) => console.error(error));

// POST request
axios({
  url: "api/cart",
  method: "POST",
  headers: {
    "content-Type": "application.json",
  },
  data: {
    id: 42,
    quantity: 1,
  },
});

// DOWNLOAD progress
axios({
  url: "api/cover/42",
  methos: "GET",
  // event handler
  onDownloadProgress: (e) => {
    console.log(e.progress ? 100 * e.progress : "N/A", "%");
  },
});
