const data = require('../db/data');
const bcrypt = require('bcryptjs');
const db = require('../db/models'); 
const User = db.User;

const userController = {
    perfil: function (req, res) {
        res.render('profile', {usuario: data.usuario, sesion: true})
        
    },
    register: function (req, res) {
        res.render('register', {sesion: false});
        
    },
    login: function (req,res) {
        res.render('login', {sesion: false});
    },
    processRegister: function (req, res){
        const { username, email, password, birthdate, dni, fotop } = req.body;
        //validaciones:
        if (email === '' || password === '') {
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
                fechaNacimiento: req.body.birthdate, 
                dni: req.body.dni,
                fotoPerfil: req.body.avatar
            })
            .then(function() {
                res.redirect('/users/login');
            })
            .catch(function(error) {
                return res.send(error);
            });
        })
        .catch(function(error) {
            return res.send(error);
        });




    

    }
};

module.exports = userController;