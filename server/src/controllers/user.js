const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const registerNewUser = async(req,res)=>{
    try{
        const existingUser = await User.findOne({phoneNumber: req.body.phoneNumber})
        if(existingUser){
            return res.status(403).json({
                msg: "phone number alredy exist"
            })
        }
        const hashPass = await bcrypt.hash(req.body.password, saltRounds )
        console.log(hashPass)
           // await User.create(req.body)
           // res.json({
           // msg: "registered successfully"
           //})
        
}catch(err){
    console.log(err)
}
}
const loginUser = async(req,res)=>{
    try{
        const userDetails = await User.findOne({phoneNumber: req.body.phoneNumber})
        console.log(userDetails)
        if(userDetails){
            const match = await bcrypt.compare(req.body.password, userDetails.password);
            if(match){
                res.json({
                    msg: 'Login sucess'
                })
            }else{
                res.status(403).json({
                    msg: 'Incorrect password'
                }) 
            }
        }else{
            return res.status(403).json({
                msg: 'Invalid phone number'
            })
        }
            
        
}catch(err){
    console.log(err)
}
}
module.exports= {registerNewUser,loginUser}