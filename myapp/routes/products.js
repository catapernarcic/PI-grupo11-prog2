const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');

router.get('/detalle/:id', productController.detalle);
router.get('/add', productController.add);
router.get('/search', productController.search);



module.exports = router;
