// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/:date?", function(req, res) {
  // Initialise default Date and JSON objects
  let date = new Date();
  let dateJson =  {"unix": date.getTime(), "utc": date.toUTCString()};
  
  // Get date parameter from URL
  let dateParam = req.params.date;

  // Atempt to parse and update data if a value was provided for the date parameter
  if(dateParam){
    // Reinitialise Date object pending on whether value provided
    // for parameter was a string or a number
    date = new Date((isNaN(dateParam) ? dateParam : parseInt(dateParam)));

    // Update JSON object based on whether or not updated Date object is valid
    dateJson = !isNaN(date) ?
      { "unix": date.getTime(), "utc": date.toUTCString() } :
      { "error": "Invalid Date" };
  }

  // Return JSON object
  res.json(dateJson);
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

module.exports = app;
