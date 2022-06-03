const mongoose=require('mongoose')

const locatioSchema=new mongoose.Schema({
    name:{
        type:String
    },
    _userId:{
        type:mongoose.Types.ObjectId
    },
    userLocation:{ 
        // lat:{
        //     type:Number
        // },
        // lon:{
        //     type:Number
        // }
    }

})

const UserLocation=mongoose.model('UserLocation',locatioSchema)

exports.UserLocation=UserLocation;