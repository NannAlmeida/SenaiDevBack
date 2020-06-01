const express = require('express');
const cors = require('cors');
const routes = express.Router();

const PlaylistController = require('./Controllers/PlaylistController');
const SubjectsController = require('./Controllers/SubjectsController');

routes.get('/playlist/:idSubject', cors(), PlaylistController.index);

routes.get('/subjects', cors(), SubjectsController.index);

module.exports = routes;