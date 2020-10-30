const {Router} = require('express');

const tileRouter = Router();

const {tileController} = require('../controllers');

tileRouter.get('/', tileController.getAllTiles);
tileRouter.get('/:userId', tileController.getByUserId);

module.exports = tileRouter;