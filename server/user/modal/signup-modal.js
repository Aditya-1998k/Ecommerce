//to create modal we need mongoose which have property
//schema and modal

const mongoose=require("mongoose");


//type-->whatever datatype you want
//required:true means without that got err
//minLength and maxLength
const signupSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        required:true,
        minLength:10,
        maxLength:10
    },
    password:{
        type:String,
        required:true,
        minLength:6
    }
});

//once our schema is created now we need to create our modal
//use mongoose.modal to create modal so that you can export it to whereeverr you want to use
//mongoose.modal("first is collection name that is created inyour database", "second is your schema")
const signupModal=mongoose.model("usersignup", signupSchema);

//export it 
module.exports=signupModal;
//import it whereever you want to use no importing in user routes