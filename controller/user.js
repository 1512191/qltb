var userModel = require('../model/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt')
exports.login = (req, res)=>{
    let email = req.body.email;
    let pass= req.body.pass;
    if(email && pass){
        userModel.employModel.findOne({email:email, password:pass}, (err, result)=>{
            if(err) return res.status(400);
            else if(result == null){
                return res.status(500);
            }
            else{
                return res.status(200).json(result)
            }
        })
    }
}
exports.register = (req, res)=>{
    let user =new userModel.employModel({
       
        email: req.body.email,
        password:req.body.pass,
        role:req.body.role
    })
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(user.password, salt, (err, hash)=>{
            if (err) throw err;
            user.password = hash;
            user.save().then(result=>{
                return res.status(200).json(user)
            },err=>{
                return res.status(400).json(err)
            })
        })
    })
exports.authenticate = (req, res)=>{
    let pass = req.body.pass;
    let email = req.body.email;
    if(email && pass){
        userModel.employModel.findOne({email:email}, (err, result)=>{
            if(err) return res.status(400).json('Error')
            else if(result == null){
                return res.status(500).json('User not found')
            }
            else{
                userModel.employModel.comparePassword(pass, result.password, (err, isMatch)=>{
                    if(err) throw err;
                    if(!isMatch){
                        
                    }
                })
                return res.status(200).json(result)
            }
        })
    }

}
    
   
}