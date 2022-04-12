const mongoose=require('mongoose')

const locatioSchema=new mongoose.Schema({
    name:{
        type:String
    },
    _userId:{
        type:mongoose.Types.ObjectId
    },
    userLocation:{
        
    }

})

const UserLocation=mongoose.model('UserLocation',locatioSchema)

exports.UserLocation=UserLocation;