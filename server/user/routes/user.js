//here we create all user related routes like login logout register etc
//require express

const express=require("express");

//get router from express.router
//create all routes related to user
//login signup logout routes
const router=express.Router();

//login-->login is working but it is post not get so you can see me in postman
router.post("/login", (req,res)=>{
    res.send("login is working but it is post not get so you can see me in postman");
});

//signup--signup is working but it is post not get so you can see me in postman
router.post("/signup", (req, res)=>{
    res.send("signup is working but it is post not get so you can see me in postman");
})

//logout -->logout is working but it is post not get so you can see me in postman
router.post("/logout", (req, res)=>{
    res.send("logout is working but it is post not get so you can see me in postman");
})

//now we need to export our router so that we can use inside our server.js
//and import inside our server
module.exports=router;