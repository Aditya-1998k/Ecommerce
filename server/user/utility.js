//creating a function to check existing use so we need to import our signupModal and then only we can check
const bcrypt=require("bcryptjs");
//to generate hash we need salt and password, salt hash that number of time and append after each hash
//salt here is taken 10 times
//generate jwt  jasonwebtoken takes three things header, payload, secretkey 
const signupModal=require("../user/modal/signup-modal")

const checkExistingUser = (username)=>{
    let checkExistingUser= false;
    return new Promise((resolve, reject)=>{
        signupModal.find({username:username}).then((userData)=>{
            if(userData.length){
                checkExistingUser=true;
            }
            resolve(checkExistingUser)
    })
})
}

//
const generatePasswordHash= (password)=>{
    const salt=10;
    let hash="";
    return new Promise((resolve,reject)=>{
        bcrypt.genSalt(salt).then((saltHash)=>{
            bcrypt.hash(password, saltHash).then ((passwordHash)=>{
            resolve(passwordHash);
         })
    
    })
})
}
//exporting it
module.exports= {checkExistingUser, generatePasswordHash};