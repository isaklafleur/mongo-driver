const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

//mongoose.Promise = require('bluebird');
mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost/mongo-driver');
}

app.use(bodyParser.json());

// Routes
routes(app);

// Middleware err, req, res are objects. next is a function
app.use((err, req, res, next) => {
    //console.log(err);
    res.status(422).send({ error: err.message });
});

module.exports = app;
