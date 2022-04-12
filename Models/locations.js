const mongoose=require('mongoose');


const locationSchema=new mongoose.Schema({
    name:{
        type:String
    },
    locations:{
        type:{
            type:String
        }
    },
    userId:{
        type:String, 
    },
    
})
const UserLocation= mongoose.model('Userlocation',locationSchema)


exports.UserLocation=UserLocation;
exports.locationSchema=locationSchema;