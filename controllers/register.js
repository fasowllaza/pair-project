const { Customer, Bundle } = require('../models/')
const bcrypt = require('bcryptjs');

class Controller {
    static getRegister (req, res) {
        res.render('register')
    }

    static postRegister (req, res) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(req.body.password, salt)
        
        let input = {
            name: (req.body.firstName + ' ' + req.body.lastName),
            userName: req.body.userName,
            address: req.body.address,
            email: req.body.email,
            noMobilePhone: req.body.noMobilePhone,
            password: hash,
        }

        Customer.create(input)
        .then(() => {
            res.redirect('/login');
        })
        .catch((err) => {
            res.send(err);
        })
    }
}

module.exports = Controller;