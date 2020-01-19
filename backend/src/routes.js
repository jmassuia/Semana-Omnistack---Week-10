const { Router } = require('express');

const DevController = require('./Controllers/DevController');
const SearchController = require('./Controllers/SearchController');
const UpdateController = require('./Controllers/UpdateController');
const DeleteController = require('./Controllers/DeleteController')


const routes = Router();

routes.get('/devs',DevController.index);    
routes.post('/devs', DevController.Store);

routes.put('/update', UpdateController.update);

routes.delete('/delete',DeleteController.destroy);

routes.get('/search',SearchController.index);

module.exports = routes;    