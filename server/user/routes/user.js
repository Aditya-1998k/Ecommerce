//here we create all user related routes like login logout register etc
//require express

const express=require("express");

const jwt=require("jsonwebtoken");
//crypto is part of node which genrate secret key for us
const crypto=require("crypto");
const bcrypt=require("bcryptjs")

const app=express() //creating our app to use express
//get router from express.router
//create all routes related to user
//login signup logout routes
const router=express.Router();
const signupModal=require("../modal/signup-modal");
const {checkExistingUser,generatePasswordHash} = require("../utility"); //importing existing user function from utility

//login-->login is working but it is post not get so you can see me in postman
//when you write console.log(req.body) then you get whatever in your body of postman into terminal
router.post("/signup", async (req,res)=>{
    if(await checkExistingUser(req.body.username)){
        res.status(400).send("here function return true so user already exist that is how we check else create user");
    }else{             
       generatePasswordHash(req.body.password).then((passwordhash)=>{
        signupModal.create({username: req.body.username, phone_number:req.body.phone_number, password: passwordhash}).then(()=>{
            res.status(200).send("user added successfully")
           }).catch((err)=>{
            res.status(400).send(err)
           })
       })
       
    }
});

//loginin--login is working but it is post not get so you can see me in postman
router.post("/login", (req, res)=>{
    signupModal.find({username:req.body.username}).then((userData)=>{
        if(userData.length){
            bcrypt.compare(req.body.password, userData[0].password).then((val)=>{
                if(val){
                    const authToken=jwt.sign(userData[0].username, process.env.SECRET_KEY);
                    res.status(200).send(authToken)
                }else{
                    res.status(400).send("Invalid Password");
                }
            })
        }else{
            res.status(400).send("Unauthorised user")
        }
    })
})

//logout -->logout is working but it is post not get so you can see me in postman
router.post("/logout", (req, res)=>{
    res.send("logout is working but it is post not get so you can see me in postman-->this is done through client side");
})

//compare with old password and then modify
router.put("/updatepassword", (req, res)=>{ 
    signupModal.find({username: req.body.username}).then((user)=>{
        if(user.length){
            bcrypt.compare(req.body.oldpassword, user[0].password).then((isMatch)=>{
                if(isMatch){
                generatePasswordHash(req.body.password).then((hashpassword)=>{
                    console.log(hashpassword)
                    signupModal.updateOne({username:req.body.username}, {password:hashpassword}).then(()=>{
                        res.status(200).send("password updated successfully")
                    }).catch((err)=>{
                        res.status(400).send(err)
                    })
                })
                }else{
                    res.status(400).send("Old password is incorrect")
                }
            })

        }else{
            res.status(400).send("Invalid user")
        }
    })
})

//now we need to export our router so that we can use inside our server.js
//and import inside our server
module.exports=router;