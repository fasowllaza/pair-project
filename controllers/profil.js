const {Customer} = require("../models")

class Controller{
    static showProfil(req, res){
        Customer.findAll({
            where:{
                userName: 'doditdatdit'
            }
        })
        .then((data)=>{
            // console.log(data);
            res.render("profil",{data:data[0]})
        })
        .catch((err)=>{
            console.log(err);
        })

    }
}

module.exports = Controller;