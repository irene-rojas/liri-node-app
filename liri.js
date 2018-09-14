// Dependencies
require("dotenv").config();
var fs = require("fs");
var moment = require("moment");
// moment().format();
var http = require("http");
var request = require("request");
var express = require("express");
var bodyParser = require("body-parser");
var keys = require("./keys.js");


// SPOTIFY
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var searchSpotify = process.argv[3];
  // when empty
  if (searchSpotify === undefined) {
    searchSpotify = "The Sign";
  };
 
// function spotifyThis(search);
function spotifyThis(song) {
spotify
  .search({ type: 'track', query: song })
  .then(function(response) {
    // identify artist
    if (song === "The Sign") {
      console.log(response.tracks.items[7].album.artists[0].name)
          // identify song
      console.log(response.tracks.items[7].name);
          // preview link
      console.log(response.tracks.items[7].preview_url);
      // identify album
      console.log(response.tracks.items[7].album.name);
    }
    else {
      console.log("Artist: " + response.tracks.items[0].album.artists[0].name)
        // identify song
      console.log("Song: " + response.tracks.items[0].name);
          // preview link
      console.log("Audio preview: " + response.tracks.items[0].preview_url);
      // identify album
      console.log("Album: " + response.tracks.items[0].album.name);
  }
  })
  .catch(function(err) {
    // no song input
    console.log(err);
  });
};  //end function spotifyThis()


// OMDB
var searchOMDB = process.argv[3];
  // when empty
  if (searchOMDB === undefined) {
    searchOMDB = "Mr. Nobody";
  };
  var movieName = "";

// function movieThis()
function movieThis(searchOMDB) {
  for (var i = 2; i < searchOMDB.length; i++) {

    if (i > 2 && i < searchOMDB.length) {
  
      movieName = movieName + "+" + searchOMDB[i];
  
    }
  
    else {
  
      movieName += searchOMDB[i];
  
    }
  }

  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  console.log(queryUrl);
  request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log("Release Year: " + JSON.parse(body).Year);
    }
  });



}; //end function movieThis()

// title of movie
// year of release
// imdb rating
// rotten tomatoes rating
// country where movie produced
// language
// plot
// actors




// spotify-doWhat
function doWhat() {
  // connect to random.txt
  fs.readFile("./random.txt", function(err, data) {
    // console.log(data.toString());
    // take text and turn it into search
    var randomTxt = data.toString().split(",");
    console.log(randomTxt);
    // run spotifyThis()
    spotifyThis(randomTxt[1]);
  }); 
};





// Bands in Town
    // name of venue
    // venue location
    // date of event ("MM/DD/YYYY")








switch(process.argv[2]) {
  case "spotify-this-song": spotifyThis(searchSpotify);
  break; // break = skip rest of switch statement
  case "movie-this": movieThis(searchOMDB);
  break; 
  case "do-what-it-says": doWhat(process.argv[3]);
  break; 
  case "concert-this": concertThis(process.argv[3]);
  break; 
};