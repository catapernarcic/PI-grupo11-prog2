const data = require('../db/data');

const mainController = {
    home: function (req, res) {
      res.render('index' ,{productos: data.productos,
                          usuario: req.session.usuario, 
                          
                          })  
    },

    search: function (req, res) {
        let  textoBuscado = req.params.texto;
        res.render('search-results' , {productos: data.productos, texto: textoBuscado})
    }
}

module.exports = mainController;