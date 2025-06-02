const data = require('../db/data');
const db = require('../database/models');

const mainController = {
    home: function (req, res) {
        db.Product.findAll({
            include: [{ association: 'user' }]  
          })
          .then(function (productos) {
            res.render('index', { productos: productos });
          })
          .catch(function (error) {
            return res.send(error);
        });
    },

    search: function (req, res) {
        let  textoBuscado = req.params.texto;
        res.render('search-results' , {productos: data.productos, texto: textoBuscado})
    }
}

module.exports = mainController;