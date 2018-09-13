// Dependencies
require("dotenv").config();
var fs = require("fs");
var moment = require("moment");
// moment().format();
var http = require("http");
// var Spotify = require("node-spotify-api");
var request = require("request");
var express = require("express");
var bodyParser = require("body-parser");
var keys = require("./keys.js");

// Sets up the Express App
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ALL CONSOLE LOG

// BANDS IN TOWN API
function concertThis() {
    var artist = madonna;


    app.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function(req, res) {
        return res.json(artists);
    });
    // name of venue
    // venue location
    // date of event ("MM/DD/YYYY")



};


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });













// spotify this song

// var spotify = new Spotify(keys.spotify);


// function spotifyRequest for song
// get response from Spotify API
// relevant API endpoints
// ex:  spotify:track:6rqhFgbbKwnb9MLmUQDhG6

// function spotifyRequest(req, res) {
//     var spotify = new Spotify({
//         id: b1961150dc3e42ac940cc7452b7b2c72,
//         secret: Saba6bee8af644192874f529f6ed45f46
//     });
//     spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     console.log(data); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });
// }; //end function spotifyRequest()



// 1. identify song; var song = GET https://api.spotify.com/v1/tracks/{id}

// 2. identify artist; var artist = GET https://api.spotify.com/v1/artists/{id}
// 3 . preview link; tracks/preview_url
// 4. identify album; var album = GET https://api.spotify.com/v1/albums/{id}
// 5. no song input = The Sign by Ace of Base


function movieInfo(req, res) {
    // var userMovie = 

    // http://www.omdbapi.com/?apikey=d9666985&

    request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
    });
// title of movie
// year of release
// imdb rating
// rotten tomatoes rating
// country where movie produced
// language
// plot
// actors

// no name = Mr. Nobody



}; // end function movieInfo()


