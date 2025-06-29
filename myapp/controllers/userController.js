const data = require('../db/data');
const bcrypt = require('bcryptjs');
const db = require('../database/models'); 
const Producto = db.Product;
const User = db.User;

const userController = {
    perfil: function (req, res) {

        if (req.session.usuario == undefined) {
            return res.redirect('/users/login');
        }  
        Producto.findAll({
            where: { usuarioId: req.session.usuario.id },
            include: [{ association: "comentarios" }]
        })
        .then(function (productos) {
             res.render("profile", {
                 perfil: req.session.usuario,  
                 usuario: req.session.usuario,
                 productos: productos
             });
            // return res.send(productos);
        })
        .catch(function (error) {
            return res.send(error);
        });
    
    },
    register: function (req, res) {
        res.render('register', {sesion: false});
        
    },
    login: function (req,res) {
        if (req. session && req.session.usuario != undefined) {
            return res.redirect('/')
        } else {
            res.render('login', {sesion: false});
        }

    },
    processRegister: function (req, res){
        const { username, email, password, nacimiento, dni, fotop } = req.body;
        //validaciones:
        if (email === '' && password === '') {
            return res.send('El email y la contraseña son obligatorios');
          }
          if (password.length < 3) {
            return res.send('La contraseña debe tener al menos 3 caracteres');
          }
        // buscar si el usuario ya existe
        User.findOne({ where: { email: email } })
        .then(function(user) {
            if (user) {
                return res.send('El email ya está en uso.');
            };

            //hashear contraseña

            const hashedPassword = bcrypt.hashSync(password, 10);

            //creo usuario
            User.create({
                email: email,
                contrasena: hashedPassword,
                fechaNacimiento: nacimiento, 
                dni: dni,
                fotoPerfil: fotop
            })
            .then(function() { //aca tengo que poner algo en el parametro?
                res.redirect('/users/login');
            })
            .catch(function(error) {
                return res.send(error);
            });
        })
        .catch(function(error) {
            return res.send(error);
        });
    },

    processLogin: function(req, res) {
        console.log(req.body);
        const {usuario, password, recordarme} = req.body;
        
        User.findOne({ where: {email: usuario}})
        .then(function(user) {
            if (!user){
                return res.send("El usuario o contrasenia son incorrectos. ")
            }

            const contraEsOK = bcrypt.compareSync(password, user.contrasena);

            if (!contraEsOK) {
                return res.send("El usuario o contrasenia son incorrectos. ")
            }
            req.session.usuario ={
                id: user.id,
                email: user.email

            };

            if (recordarme) {
                res.cookie('userEmail', user.email, { maxAge: 1000 * 60 * 5});
            }
            res.redirect('/');


        })
        .catch(function(error) {
            return res.send(error);
        });
    },

    logout: function(req, res) {
        req.session.destroy(function() {
            res.clearCookie('userEmail');
            res.redirect('/')
        })
    },
    mostrarPerfil: function (req, res) {
        let idUsuario = req.params.id;

        db.User.findByPk(idUsuario)
        .then(function (user) {
            if (!user) {
                return res.send("Usuario no encontrado");
            } 
    
            db.Product.findAll({
                where: { usuarioId: idUsuario },
                include: [{ association: "comentarios" }]
            })
            .then(function (productos) {
                res.render('profile', { perfil: user, productos: productos, usuario: req.session.usuario });
            })
            .catch(function (error) {
                return res.send(error);
            });
        })
        .catch(function (error) {
            return res.send(error);
        });
    }
};



module.exports = userController;