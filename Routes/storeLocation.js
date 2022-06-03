const express=require('express');
const auth = require('../middleware/auth');
const {UserLocation}=require('../Models/userLocation')
const route=express.Router();



//Get all Locations UserId 
route.get('/',auth,async(req,res)=>{

    //resonse middleware and access middleware required
    
    try{
    const details=await UserLocation.find({_userId:req.user});
    console.log(details)    
    res.send(details)

    }catch(e){
        res.status(400).send("Please Save a Location")
    }
})


//Post new Locations using userID

route.post('/',auth,async(req,res)=>{
    console.log(req.user)
    // console.log(req.body.location.lon)
    // const body=req.body;

    // console.log(body.location[0])
    
    const newlocation = UserLocation({
        name:req.body.name,
        _userId:req.user,
        userLocation:req.body.location,
            
    
    })  
    // const parsed=JSON.parse(req.body)
    // console.log(parsed)

    await newlocation.save();
    res.send(newlocation)
    
})
//Delete a Location
route.put('/:id',auth,async(req,res)=>{

    //validate request
    const result=await UserLocation.findById(req.params.id);
    result.remove();
    res.send("Done");   
})

module.exports=route