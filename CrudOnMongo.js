const express = require("express");
const app = express();
const Port = 9000;
const User = require("./ConnectMongo")

app.use(express.json());

app.post("/CreateSingleUser",async(req,res)=>{
    try {
        const CreateUser = new User(req.body)
        const UserInfo = await CreateUser.save()
        console.log(UserInfo);
        res.json({Data:UserInfo,Status:"Account has been Created...."})

    } catch (error) {
        console.log(error);
        res.json({message:error.message})
    }
})

app.post("/CreateMultipleUser",async(req,res)=>{
    try {
        const UserInfo = await User.insertMany(req.body)
        console.log(UserInfo);
        res.json({Data:UserInfo,Status:"Accounts has been Created...."})

    } catch (error) {
        console.log(error);
        res.json({message:error.message})
    }
})

app.get("/getAlluser",async(req,res)=>{
    try {
        const UserData = await User.find()
        console.log(UserData);
        res.json({Data:UserData})

    } catch (error) {
        console.log(error);
        res.json({message:error.message})
    }
})

app.patch("/UpdateUser/:id",async(req,res)=>{
    try {
        const updateData = await User.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true})
        console.log(updateData);
        res.json({Data:updateData})

    } catch (error) {
        console.log(error);
        res.json({message:error.message})
    }
})

app.delete("/DeleteUser/:id",async(req,res)=>{
    try {
        const DeleteData = await User.findByIdAndDelete({_id:req.params.id})
        console.log(DeleteData);
        res.json({Data:DeleteData})
        
    } catch (error) {
        console.log(error);
        res.json({message:error.message})
    }
})

app.listen(Port,()=>{
    console.log(`MY SERVER RUNNING AT http://localhost:${Port}`);
})