const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
const routes=require('./Routes/taskRoute');
const app=express();

app.use(express.json());
app.use(routes);
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to Database');
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
