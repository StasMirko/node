const router = require('express').Router();

const userController = require('../controller/user.controller.js');
const userMiddlevare = require('../middleware/user.middlevare');

router.get('/', userController.getAllUsers);

router.get('/:userId', userMiddlevare.checkIsIdValid, userController.getSingleUser);

router.post('/', userMiddlevare.isUserValid ,userController.createUser);

module.exports = router;


