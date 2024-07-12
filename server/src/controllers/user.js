'use client'
const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

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
            await User.create(req.body)
            res.json({
            msg: "registered successfully"
           })
        
}catch(err){
    console.log(err)
}
}
const getAllUsers = async(req,res)=>{
    const data= await User.find()
    res.json({data})
}
const loginUser = async(req,res)=>{
    try{
        const userDetails = await User.findOne({phoneNumber: req.body.phoneNumber})
        console.log(userDetails)
        if(userDetails){
            const match = await bcrypt.compare(req.body.password, userDetails.password);
            if(match){
                const token = jwt.sign({ phoneNumber: req.body.phoneNumber }, '3ff389373984aed2fe10f6708d52df49548e45646bc350dc8b630ad90ca96b925205debdb4688e148c10b7ce8751c84d5de441b56304fdce3a60809f7d8010ec');
                res.json({
                    msg: 'Login sucess',
                    token,
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
module.exports= {registerNewUser,loginUser,getAllUsers}