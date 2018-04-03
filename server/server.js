const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT || 3001;

// create the connection for the mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "betwixtDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if(err) throw err;

})

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});