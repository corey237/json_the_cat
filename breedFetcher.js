const request = require("request");


const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search/?name=${breed}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    } 
    const description = JSON.parse(body);
    if (description[0]) {
      return callback(null, description[0].description);
    } else {
      return callback("Breed not found");
    }
  });

};

module.exports = { fetchBreedDescription };



