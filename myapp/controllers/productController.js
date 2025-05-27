
const db = require('../database/models')
let Op = db.Sequelize.Op;
const data = require('../db/data')
const { where } = require("sequelize");

const productController = {
    list: function (req, res) {
        res.render('products', { productos: data.productos, usuario: data.usuario, id: req.params.id, sesion: true});
      },
    add: function (req, res){
        res.render('product-add',{usuario: data.usuario, sesion: true})
    },
    search: function (req, res) {
        const buscado = req.query.search;

        if(!buscado){
          return res.send("No se encontraron resultados, porfavor introduzca una palabra ")
        }

        db.Product.findAll({
          where: {
            nombre: {[Op.like]: '%' + buscado + '%'}
          },
          include: [
            {association: "user" }
          ]
        })
        .then(function (encontrados) {
          if(encontrados.length === 0){
            res.send("No hay resultados para su busqueda");
          } else {
            res.render('search-results', {productos: encontrados, texto: buscado, sesion: req.session.usuario});
          }
        })
        .catch(function (error) {
          res.send(error);
        })

      }



}

module.exports = productController;