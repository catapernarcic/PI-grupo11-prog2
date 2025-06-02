
const db = require('../database/models')
let Op = db.Sequelize.Op;
const data = require('../db/data')
const { where } = require("sequelize");

const productController = {
    detalle: function (req, res) {

      let IdProducto = req.params.id;

      db.Product.findByPk(IdProducto, {
        include: [{association: "user"},
          { association: "comentarios", include: ["usuario"] }
        ]
      })
      .then(function (buscado) {
        if (!buscado) {
          return res.send("No se encotnro el detalle de ese producto")
        } else {
        res.render('products', {productos: [buscado], id: IdProducto, usuario: req.session.usuario})
         //return res.send(IdProducto)
        }
      })
       //res.render('products', { productos: data.productos, usuario: data.usuario, id: req.params.id, sesion: true});
      },
    add: function (req, res){
        if (!req.session.usuario) {
          return res.redirect('/users/login');
        }
        res.render('product-add',{usuario: req.session.usuario, sesion: true})
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
            res.render('search-results', {productos: encontrados, texto: buscado, usuario: req.session.usuario});
          }
        })
        .catch(function (error) {
          res.send(error);
        })

      },
      guardarProducto: function (req, res) {
          const { nombre, descripcion, imagen } = req.body;
          // Validar que haya un usuario logueado
              if (!req.session.usuario) {
                  return res.redirect('/users/login');
              }
              if (nombre === '') {
                  return res.send('El nombre es obligatorio.');
                }
            
                if (descripcion === '') {
                  return res.send('La descripción es obligatoria.');
                }
            
                if (imagen === '') {
                  return res.send('La imagen es obligatoria.');
                }
  
                db.Product.create({
                  nombre: nombre,
                  descripcion: descripcion,
                  imagen: imagen,
                  usuarioId: req.session.usuario.id
                })
                .then(function () {
                  res.redirect("/");
                })
                .catch(function () {
                  return res.send(error);
                })
            
      },
      guardarComentario: function (req, res) {
        const { texto} = req.body;
        const productoId = req.params.id;

        if (!req.session.usuario) {
           return res.redirect('/users/login');
        }

        if (texto === '') {
          return res.send('El comentario no puede estar vacío.');
        }

        db.Coment.create({
          texto: texto,
          usuarioId: req.session.usuario.id,
          productoId: productoId
        })
        
        .then(function () {
          res.redirect(`/products/detalle/${productoId}`);
        })
        .catch(function (error) {
          return res.send(error);
        })
    }
      
  }

module.exports = productController;