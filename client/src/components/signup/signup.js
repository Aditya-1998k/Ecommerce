import { useState } from "react";
import axios from "axios";

const Signup=()=>{
    //to store data we need state
    const [signupState, setSignupState]=useState({});

    //this way saves you in html part
    const SignupFormData=[{attr:"username", type: "text", id:"username", label:"Username:"},
                          {attr:"phone_number", type: "text", id:"phone_number", label:"Mobile Number:"},
                          {attr:"password", type: "password", id:"password", label:"Password:"}]
    // to send data to backend we need axios                      
    const handleUserAdd=()=>{
        console.log(signupState)
        axios({
            url:"http://localhost:3001/user/signup",  //url is where we want our data
            method:"POST", //this can be post delete get and put
            headers:{
            },
            data:signupState //data is same like we passing data in postman body
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }   
    const handleInputChange=(e, id)=>{
        if(id==="phone_number"){
            e.target.value=parseInt(e.target.value)
        }
        setSignupState({...signupState, [id]: e.target.value})
    }                   
            return(
                <>
                    <div>
                        <form>
                            {SignupFormData.map((formkey)=>{  //using map method to create our form page
                                return(
                                    <div key={formkey.id}>
                                        <div>
                                            <label htmlFor={formkey.id}>{formkey.label}</label>
                                        </div>
                                        <div>
                                            <input type={formkey.type} id={formkey.id} onChange={(e)=>{handleInputChange(e,formkey.id)}}/>
                                        </div>
                                    </div>
                                )
                            })}
                        </form>
                        <button type="submit" onClick={handleUserAdd}>SIGNUP</button>
                    </div>
                </>
            )
}
export default Signup;