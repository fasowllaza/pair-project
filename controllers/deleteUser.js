const { Customer } = require("../models")

class Controller {
    static getDelete (req, res) {
        Customer.destroy({where: {id: req.params.id} })
        .then(() => {
            res.redirect('/homepage');
        })
        .catch((err) => {
            res.send(err);
        })
    }
}

module.exports = Controller;
