module.exports = {
    /* ES 5
    greeting: function(req,res) {

    },
    */
    // ES6
    greeting(req, res) {
        res.send({ hi: 'there' });
    },
    create(req, res) {

    }
};

