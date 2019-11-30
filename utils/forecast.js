const request = require('request');

const forecast = (latitude, longitude, callback) => {
    // st = "https://api.darksky.net/forecast/59330d3606074c91e064b8b9c82094ab/-71.0596,42.3605?units=si&lang=uk";
    const url = "https://api.darksky.net/forecast/59330d3606074c91e064b8b9c82094ab/" +
                latitude +
                "," +
                longitude +
                "?units=si&lang=uk";
    
    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather services!', undefined);
        }else if(response.body.error){
            callback('Unable to find forecast for that location. Try another location.', undefined);
        }else{
            callback(undefined, {
                temperature: response.body.currently.temperature,
                humidity: response.body.currently.humidity,
                summary: response.body.currently.summary
            });
        }
    });
}

module.exports = forecast;