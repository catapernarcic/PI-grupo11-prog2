const data = require('../db/data')

const productController = {
    list: function (req, res) {
        res.render('products', { productos: data.productos, usuario: data.usuario });
      },
    detalle: function (req, res) {
        let id = +req.params.id;
        let productoBuscado = null;

        for (let i = 0; i < data.productos.length; i++) {
            if (data.productos[i].id === id) {
                productoBuscado = data.productos[i]
            } 
        }
        res.render('product', {producto: productoBuscado})
    },
    add: function (req, res){
        res.render('product-add',
        {usuario: data.usuario} )
    },
    search: function (req, res) {
        res.render('search-results', { productos: data.productos, texto: "texto buscado"});
      }
}

module.exports = productController;