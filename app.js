const express = require('express');

const app = express();

// Watch for incoming HTTP request of method GET
// to the route http://localhost:3050/api
app.get('/api', (req, res) => {
    res.send({ hi: 'there' });
});


//app.post('/api');
//app.put('api');
//app.delete('/api')

module.exports = app;