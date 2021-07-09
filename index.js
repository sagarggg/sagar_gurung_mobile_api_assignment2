//requiring express to make our api
const express = require("express");

//use/require the todolistmodel js file
var Task = require('./api/models/todolistModel');

//require db connection file
const InitiateMongoServer = require("./db.js");

InitiateMongoServer();

const app = express();

//this is the port for our server
const port = process.env.port || 3000;

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

//get empty api path for testing
app.get("/", (req, res) => {
  res.send({ message:"API Still Working Fine" });
});

//import routes from the results 
var routes = require('./api/routes/todolistRoutes');
//register our routes
routes(app);


app.listen(port, (req, res) => {
  console.log('Server Started at PORT ' + port);
});