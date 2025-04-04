const data = require('../db/data');

const userController = {
    perfil: function (req, res) {
        res.render('profile', {usuario: data.usuario})
        
    },
    register: function (req, res) {
        res.render('register');
        
    },
    login: function (req,res) {
        res.render('login');
    }
}

module.exports = userController;