const express=require('express')
const {UserLocation}=require('../Models/userLocation')
const route=express.Router();


//Get all Locations UserId 
route.get('/:id',async(req,res)=>{
    //validate request
    console.log(req.params.id)
    const details=await UserLocation.find({_userId:req.params.id});
    console.log(details)
    res.send(details)
})


//Post new Locations using userID
route.post('/:id',async(req,res)=>{
    //validate request 

    const newlocation = UserLocation({
        name:req.body.name,
        _userId:req.body.userId,
        userLocation:req.body.location
    })  
   await newlocation.save();
    res.send(newlocation)
    
})
//Delete a Location
route.put('/:id',async(req,res)=>{
    //validate request
    const result=await UserLocation.findById(req.params.id);
        result.remove();
     res.send("Done");   
})

module.exports=route