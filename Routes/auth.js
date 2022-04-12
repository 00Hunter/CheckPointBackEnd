const express=require('express')
const bcyrpt=require('bcrypt')
const {User}=require('../Models/user')
const route=express.Router();
const joi=require('joi');



route.post('/',async(req,res)=>{
        const {error} =validateReq(req.body)
        if(error){
            return res.status(400).send(error.details[0])
        }

        let user=await User.findOne({email:req.body.email})
        
        if(!user){
            return res.status(400).send("Invalid email or password")
        }

        let validatePassword=await bcyrpt.compare(req.body.password,user.password)
        
        if(!validatePassword){
            res.status(400).send("Invalid id or password")
        }

        res.send(user._id);
        
        //Using becrypt to compare password 


})

function validateReq(req){
    const schemaUser=joi.object({
        email:joi.string().min(4).max(100).required(),
        password:joi.string().min(4).max(100).required()
    })

    return schemaUser.validate(req);
}

module.exports=route