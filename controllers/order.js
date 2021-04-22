const moneyFormatter = require('../helper/moneyFormatter');

class Controller{
    static orderForm(req, res){
        res.render("customOrder")
    }
    static orderFormPost(req, res){
        res.redirect("/profile")
    }
}

module.exports = Controller
