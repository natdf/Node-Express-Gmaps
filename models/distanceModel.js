const fetch = require('node-fetch');
const config = require('../config.js');

const KEY_GMAPS_DISTANCES = config.distance.apiKey;
const URI_DISTANCE =
  'https://maps.googleapis.com/maps/api/distancematrix/json?origins=';

function getDistance(origins, destinations) {
  return new Promise((resolve, reject) => {
    const distanceUrl =
      URI_DISTANCE +
      origins +
      '&destinations=' +
      destinations +
      '&key=' +
      KEY_GMAPS_DISTANCES;
    fetch(distanceUrl)
      .then(distance => distance.json())
      .then(distance => {
        console.log('zzzzz', distance);
        resolve(distance.rows[0].elements);
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = { getDistance };