const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.list);
router.get('/add', productController.add);
router.get('/search/:texto', productController.search);
router.get('/:id', productController.detalle);


module.exports = router;
