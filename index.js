const express=require('express');
const app=express();
const mongoose=require('mongoose')
const auth=require('./Routes/auth')
const user=require('./Routes/user')
const hello=require('./Routes/hello')
const storelocation=require('./Routes/storeLocation');


mongoose.connect('mongodb://localhost/CheckPoint')
    .then(()=>{console.log("Connected to mongodb")})
    .catch(()=>{console.log("Cannot connect to mongodb")})



app.use(express.json());
app.use('/api/store',storelocation);
app.use('/api/auth',auth);
app.use('/api/user',user)
app.use('/api/hello',hello)







const port=process.env.PORT||3000;
app.listen(port,()=>{console.log(`Listining to port${port}`)})



