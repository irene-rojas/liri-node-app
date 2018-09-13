// Dependencies
require("dotenv").config();
var fs = require("fs");
var moment = require("moment");
// moment().format();
var http = require("http");
var spotify = require("node-spotify-api");
var request = require("request");

var keys = require("/keys.js");

var spotify = new Spotify(keys.spotify);