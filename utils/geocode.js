const request = require('request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoidXNlcjMzMyIsImEiOiJjazNjMm1wbXcwcnR2M2VrM28yeXh0ZTVyIn0.DCxaCd1Wj-u3P-Qvmhmrtg&limit=1";

    const request = require('request');
    
    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services!', undefined);
        }else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined);
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            });
        }
    });
}

module.exports = geocode;