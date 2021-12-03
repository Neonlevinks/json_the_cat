const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    }
  
    const data = JSON.parse(body);
  
    if (data[0]) {
      callback(data[0].description);
    }
    
    if (!data[0]) {
      callback("Breed not found");
    }
  });
};

module.exports = { fetchBreedDescription };