const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

//mongoose.Promise = require('bluebird');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongo-driver');

app.use(bodyParser.json());
routes(app);

module.exports = app;
