const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
    // Watch for incoming HTTP request of method GET
    // to the route http://localhost:3050/api
    app.get('/api', DriversController.greeting);
    // Route, create a new driver with POST method
    app.post('/api/drivers', DriversController.create);
    app.put('/api/drivers/:id', DriversController.edit);
    app.delete('/api/drivers/:id', DriversController.delete);
};
