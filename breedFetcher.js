const request = require("request");


const fetchBreedDescription = function(breed, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search/?name=${breed}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      console.log("An error has occurred, please try again.");
    } else if (!response) {
      console.log("An error has occurred with the response", response);
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });

};


module.exports = { fetchBreedDescription };



