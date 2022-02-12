var gzippo = require('gzippo');
var express = require('express');
var app = express();
var geoip = require('geoip-lite');

const yelp = require('yelp-fusion');
var bodyParser = require('body-parser');

const CLIENT_ID = process.env.CLIENT_ID;
const API_KEY = process.env.API_KEY;

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

app.post('/IP', function(req, res) {
  console.log("/IP Called");
  console.log(req.body);

  var ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  var geo = geoip.lookup(ip);
  if (geo == null) {
    res.send({
      lat: null,
      long: null,
      error: true
    })
  }
  console.log("ip: " + ip);
  console.log("geo: " + geo);
  var lat = geo.ll[0];
  var long = geo.ll[1];
  console.log("lat: " + lat);
  console.log("long: " + long);
  response = {
    lat: lat,
    long: long,
    error: false
  };
  res.send(response);
});





app.post('/yelp', function(req, res) {
  console.log("/yelp Called");
  console.log(req.body);

  /*
  "food_type": getParameterByName('type', window.location.href),
  "geolocation": false,
  "long": -1,
  "lat": -1,
  "radius": 1000,
  "limit": 50
  */

  var lat = req.body.lat;
  var long = req.body.long;

  const searchRequest = {
    term: req.body.food_type,
    latitude: lat,
    longitude: long,
    radius: req.body.radius,
    limit: req.body.limit
  };

  yelp.accessToken(CLIENT_ID, API_KEY).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search(searchRequest).then(response => {
      console.log("Yelp API Call Successful. Found " + response.jsonBody.businesses.length + " restraunts");
      if (response.jsonBody.businesses.length < 1) {
        console.log("Zero results");
      }
      res.send(response.jsonBody.businesses);
    });
  }).catch(e => {
    console.log(e);
  });

});

app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
