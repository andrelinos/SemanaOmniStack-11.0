const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Ongs routes
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

// Profile
routes.get('/profile', ProfileController.index);

// Login
routes.post('/sessions', SessionController.create);

// Incidents routes
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;