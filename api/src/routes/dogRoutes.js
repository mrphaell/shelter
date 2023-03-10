const express = require('express');
const dogsController = require('../controllers/dogs');

const controller = new dogsController();
const dogsRouter = express.Router();

dogsRouter.get('/dogs', controller.getAll);

dogsRouter.get('/dogs/:dogId', controller.getOne);

dogsRouter.post('/dogs/', controller.create);

dogsRouter.patch('/dogs/:dogId', controller.update);

dogsRouter.delete('/dogs/:dogId', controller.deleteOne);

module.exports = dogsRouter;