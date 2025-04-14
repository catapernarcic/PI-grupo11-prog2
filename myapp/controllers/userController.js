const data = require('../db/data');

const userController = {
    perfil: function (req, res) {
        res.render('profile', {usuario: data.usuario, sesion: true})
        
    },
    register: function (req, res) {
        res.render('register', {sesion: false});
        
    },
    login: function (req,res) {
        res.render('login', {sesion: false});
    }
}

module.exports = userController;