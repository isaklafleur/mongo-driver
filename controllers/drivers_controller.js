const Driver = require('../models/drivers');

module.exports = {
    /* ES 5
    greeting: function(req,res) {

    },
    */
    // ES6
    greeting(req, res) {
        res.send({ hi: 'there' });
    },

    create(req, res, next) {
        //console.log(req.body);
        const driverProps = req.body;

        Driver.create(driverProps)
        .then(driver => res.send(driver))
        .catch(next);
    }
};

