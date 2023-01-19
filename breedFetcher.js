const request = require("request");
const breed = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search/?name=${breed}`, (error, response, body) => {
  if (error) {
    console.log("An error has occurred, please try again.");
  } else if (!response) {
    console.log("An error has occurred with the response", response);
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});



