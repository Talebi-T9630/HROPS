const express = require('express');
const userrouter = express.Router();
const UsersController = require('../controllers/UsersController');
// require('express-group-routes');

// Define routes and link them to controller methods
userrouter.get('/index', UsersController.getAllUsers);
userrouter.get('/show/:id', UsersController.getUserById);
userrouter.post('/create', UsersController.createUser);
userrouter.put('/update/:id', UsersController.updateUser);
userrouter.delete('/delete/:id', UsersController.deleteUser);
//    router.use(middleware); I will use this when I add my authentication
module.exports = userrouter;