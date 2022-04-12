const mongoose=require('mongoose');
const Joi=require('joi')

const User=new mongoose.model('User',new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:15
    },
    email:{
        type:String,
        required:true,
        maxlength:50,
        minlength:5
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:100
    },

}))

function validateUser(user){
    const schema=Joi.object({  
        name:Joi.string().max(15).min(5).required(),
        email:Joi.string().min(5).max(50).required(),
        password:Joi.string().min(5).max(15).required()
    })
  
    return schema.validate(user)
}
exports.validateUser=validateUser;
exports.User=User;