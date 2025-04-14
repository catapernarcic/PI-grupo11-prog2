const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');

router.get('/detalle/:id', productController.list);
router.get('/add', productController.add);
router.get('/search', productController.search);
router.get('/:id', productController.detalle);


module.exports = router;
