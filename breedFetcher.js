const request = require('request');
const args = process.argv.slice(2);
const inputBreed = args[0];

request(`https://api.thecatsdsapi.com/v1/breeds/search?q=${inputBreed}`, (error, response, body) => {
  if (error) {
    console.log(error)
    return
  };

  const data = JSON.parse(body);

  if (data[0]) {
    console.log(data[0].description);
  }
  
  if (!data[0]) {
    console.log("Breed not found");
  }
})