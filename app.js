const request = require("request");

debugger;

const weather_url =
  "https://api.darksky.net/forecast/59330d3606074c91e064b8b9c82094ab/37.8267,-122.4233?units=si&lang=uk";

const loc_url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Rivne%20Varash.json?access_token=pk.eyJ1IjoidXNlcjMzMyIsImEiOiJjazNjMm1wbXcwcnR2M2VrM28yeXh0ZTVyIn0.DCxaCd1Wj-u3P-Qvmhmrtg&limit=1";

request(
  {
    url: loc_url,
    json: true
  },
  (error, response) => {
    request(
      {
        url:
          "https://api.darksky.net/forecast/59330d3606074c91e064b8b9c82094ab/" +
          response.body.features[0].center[1] +
          "," +
          response.body.features[0].center[0] +
          "?units=si&lang=uk",
        json: true,
      },
      (error, response) => {
        currently = response.body.currently;
        console.log(
          "This is currently " +
            currently.temperature +
            " degrees out. There is a " +
            currently.precipProbability +
            "% chance of rain."
        );
      }
    );
  }
);