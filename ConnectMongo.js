const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/userData").then(()=>{
    console.log("Connected Successfully....");
}).catch((err)=>{
    console.log(err);
})

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minLength:[2,"Minimum 2 length is required"],
        maxLength:30
    },
    age:{
        type:Number,
        required:true,
        min:[1,"Age should be grater than or equal to 1"],
        max:100
    },
    city:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:25
    }
})

const User = new mongoose.model("alluser",UserSchema)

module.exports = User