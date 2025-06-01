const data = require('../db/data');
const bcrypt = require('bcryptjs');
const db = require('../database/models'); 
const User = db.User;

const userController = {
    perfil: function (req, res) {
        if (!req.session.usuario) {
            return res.redirect('/users/login');
        }
    
        // Buscar los datos del usuario y sus productos
        db.User.findByPk(req.session.usuario.id, {
            include: [{ model: db.Producto }]
        })
        .then(function(user) {
            if (!user) {
                return res.send("Usuario no encontrado");
            }
    
            const productos = user.Productos; 
            const cantidad = productos.length;
    
            res.render('profile', {
                perfil: user,             
                productos: productos,     
                cantidad: cantidad,       
                usuario: req.session.usuario 
            });
        })
        
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
            res.render('profile', { perfil: user, usuario: req.session.usuario });
        })
        .catch(err => res.send(err));
    }
};



module.exports = userController;