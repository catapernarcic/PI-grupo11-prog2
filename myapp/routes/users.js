var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const userController = require('../controllers/userController');

router.get('/profile', userController.perfil);
router.get('/register', userController.register);
router.get('/login', userController.login);
module.exports = router;
