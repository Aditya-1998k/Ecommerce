//creating a function to check existing use so we need to import our signupModal and then only we can check
const signupModal=require("../user/modal/signup-modal")

const checkExistingUser =async(username)=>{
    let checkExistingUser= false;
    await signupModal.find({username:username}).then((userData)=>{
        if(userData.length){
            checkExistingUser=true;
        }
        return checkExistingUser;
    })
}
//exporting it
module.exports= checkExistingUser;