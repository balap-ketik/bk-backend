const User = require('../models/model.user')

module.exports={
    signIn(req, res){
        User.findOne({username:req.body.username}).then(dataUser=>{
            if(dataUser){
                res.status(200).json({
                    message:'logged in',
                    dataUser
                })
            }else{
                User.create({
                    username: req.body.username
                }).then(newUser=>{
                    res.status(200).json({
                        message : 'new user created'
                    })
                }).catch(err=>res.send(err))
            }
        }).catch(err=>res.send(err))
    }
}