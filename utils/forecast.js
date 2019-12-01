const request = require('request');

const forecast = (latitude, longitude, callback) => {
    // st = "https://api.darksky.net/forecast/59330d3606074c91e064b8b9c82094ab/-71.0596,42.3605?units=si&lang=uk";
    const url = "https://api.darksky.net/forecast/59330d3606074c91e064b8b9c82094ab/" +
                latitude +
                "," +
                longitude +
                "?units=si&lang=uk";
    
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather services!', undefined);
        }else if(body.error){
            callback('Unable to find forecast for that location. Try another location.', undefined);
        }else{
            callback(undefined, {
                temperature: body.currently.temperature,
                humidity: body.currently.humidity,
                summary: body.currently.summary
            });
        }
    });
}

module.exports = forecast;