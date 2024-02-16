const request = require("request");

const catBreed = process.argv[2].substring(0, 4);

request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  }
  if (response.statusCode !== 200) {
    console.log('statusCode:', response && response.statusCode);
  }

  const data = JSON.parse(body);
  console.log(data[0].description);
 

 
});


