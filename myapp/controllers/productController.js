const data = require('../db/data')

const productController = {
    list: function (req, res) {
        res.render('products', { productos: data.productos, usuario: data.usuario, id: req.params.id, sesion: true});
      },
    add: function (req, res){
        res.render('product-add',{usuario: data.usuario, sesion: true})
    },
    search: function (req, res) {
        res.render('search-results', { productos: data.productos, texto: "texto buscado", sesion: true});
      }
}

module.exports = productController;