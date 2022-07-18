const express=require("express");  //importing express in our server.js file
const userController=require("../server/user/routes/user");
const mongoose=require("mongoose");

const app=express() //creating our app to use express

//creating our server at 3001 with error printing if it have after listen passing call back to see 
//what happen it created or not
//for running on production we use nodemon to see app crash condition not use live server for nodemon read readme file
app.listen(3001, (err)=>{
    if(!err){
        console.log("server started at 3001")
    }else{
        console.log(err)
    }
});

//connecting to your database and creating your database name here our database name is Ecommerce
//it have two callback fxn which are data and err funciton 
//on succesfully connected it show successfully connected to database in terminal other wise show err
//we define collection inside modals
mongoose.connect("mongodb://localhost/Ecommerce", (data)=>{
    console.log("Successfully connected to database")
}, (err)=>{
    console.log(err)
})

//data we get from front is either json data or form data bydefault express dont directly support these things
// so we need use data middle ware to read form data and json data 
//data middleware or bodyparser middleware
app.use(express.json()); //cover json data
app.use(express.urlencoded({extended: false})); //cover form data and encoded form data both

//now our sever started but we dont get anything on our server so need to add our base routes
//creating base route after that you get message on your base routes
app.get("/", (req,res)=>{
    res.send("Hi i am your ecommerce back end")
})

//middleware when something like routes is triggered first thing is middlleware executed
//its like passing some configuration to your routes here
app.use("/user", userController)
