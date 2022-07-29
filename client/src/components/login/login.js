import axios from 'axios';
import React, { useState } from 'react'

const Login = ()=> {
    const [loginData, setloginData]=useState({username:"", password:""});

    const handleLogin=()=>{
        axios({
            url:"http://localhost:3001/user/login",
            method:"POST",
            headers:{

            },
            data:loginData
        }).then((res)=>{
            console.log(res)//here we are getting token we can store it in localstorage or cookies
            localStorage.setItem("authorization", res.data)
            
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <>
        <form>
            <div>
                <label htmlFor='username'>Username:</label>
                <div>
                    <input id='username' type="text" onChange={(e)=>{setloginData({...loginData, username:e.target.value})}}></input>
                </div>
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <div>
                    <input id='password' type="text" onChange={(e)=>{setloginData({...loginData, password:e.target.value})}}></input>
                </div>
            </div>
            <button type='button' onClick={handleLogin}>LogIn</button>
        </form>
    </>
  )
}

export default Login;