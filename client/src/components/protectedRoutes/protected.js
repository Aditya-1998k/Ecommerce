import { Navigate } from "react-router-dom";

const Protected =({children})=>{
        const token= localStorage.getItem("authorization");
        return(
            <>
            {token.length ? children: <Navigate to="/login"/>}
            </>
        )
}
export default Protected;

//this is for the page which is not allowed to visit without login
//here we check if authorization token is available then only we allowed to enter 
//other wise redirect to login page
//use this component in our root directrory
//we need to write all the component inside this if we want to set certain condition