const {Router} = require('express');
const {userController} = require('../controllers/index');


const UserRouter = Router();

UserRouter.get('/', userController.getAllUsers);

module.exports = UserRouter;