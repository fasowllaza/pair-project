const {Bundle} = require("../models")

class Controller{

    static showMembership(req, res){
        Bundle
        .findAll()
        .then((data)=>{
            res.render("membershipOrder", {data})
        })
    }
    static showMembershipPost(req, res){
        console.log(req.session.username);
        Bundle.findByPk(req.params.id)
        .then((data)=>{
            res.send(data)
        })
    }
}

module.exports = Controller