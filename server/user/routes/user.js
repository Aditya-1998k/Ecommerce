//here we create all user related routes like login logout register etc
//require express

const express=require("express");
const bcrypt=require("bcryptjs");
//to generate hash we need salt and password, salt hash that number of time and append after each hash
const salt=10; //salt here is taken 10 times
//generate jwt  jasonwebtoken takes three things header, payload, secretkey 
const jwt=require("jsonwebtoken");
//crypto is part of node which genrate secret key for us
const crypto=require("crypto");
const secretKey=crypto.randomBytes(64).toString("hex");

const app=express() //creating our app to use express
//get router from express.router
//create all routes related to user
//login signup logout routes
const router=express.Router();
const signupModal=require("../modal/signup-modal");
const checkExistingUser = require("../utility"); //importing existing user function from utility

//login-->login is working but it is post not get so you can see me in postman
//when you write console.log(req.body) then you get whatever in your body of postman into terminal
router.post("/signup", async(req,res)=>{
    if(await checkExistingUser(req.body.username)){
        res.status(400).send("here function return true so user already exist that is how we check else create user");
    }else{
        bcrypt.genSalt(salt).then((saltHash)=>{
                bcrypt.hash(req.body.password, saltHash).then((passwordHash)=>{   ////take two vlaue password and salthash
                    signupModal.create({username: req.body.username, phone_number: req.body.phone_number, password: passwordHash}).then(()=>{
                        res.status(200).send("User Added Successfully");
                    }).catch((err)=>{
                        res.status(400).send(err)
                    })
                }) .catch((err)=>{console.log(err)}) 
        }).catch((err)=>{
            console.log(err)
        })
    }
    console.log(req.body)
});

//loginin--login is working but it is post not get so you can see me in postman
router.post("/login", (req, res)=>{
    signupModal.find({username:req.body.username}).then((userData)=>{
        if(userData.length){
            bcrypt.compare(req.body.password, userData[0].password).then((val)=>{
                if(val){
                    const authToken=jwt.sign(userData[0].username, secretKey);
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
    res.send("logout is working but it is post not get so you can see me in postman");
})

//now we need to export our router so that we can use inside our server.js
//and import inside our server
module.exports=router;