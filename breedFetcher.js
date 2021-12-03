const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error);
      return
    } else if (data[0]) {
      callback(null, data[0].description);
    } else if (!data[0]) {
      callback("Breed not found", null);
    }
  });
};

module.exports = { fetchBreedDescription };