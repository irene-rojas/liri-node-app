// Dependencies
require("dotenv").config();
var fs = require("fs");
var moment = require("moment");
// moment().format();
var http = require("http");
var Spotify = require("node-spotify-api");
var request = require("request");
var express = require("express");
var keys = require("/keys.js");

var PORT = 8080;

// ALL CONSOLE LOG

// spotify this song

var spotify = new Spotify(keys.spotify);


// function spotifyRequest for song
// get response from Spotify API
// relevant API endpoints
// ex:  spotify:track:6rqhFgbbKwnb9MLmUQDhG6

// 1. identify song; var song = GET https://api.spotify.com/v1/tracks/{id}

// 2. identify artist; var artist = GET https://api.spotify.com/v1/artists/{id}
// 3 . preview link; tracks/preview_url
// 4. identify album; var album = GET https://api.spotify.com/v1/albums/{id}
// 5. no song input = The Sign by Ace of Base