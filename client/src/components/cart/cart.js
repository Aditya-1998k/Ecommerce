import React from 'react';
import { useState, useEffect } from 'react';


const Cart=()=> {
    const [cartdata, setCartData]=useState([]);
    const authToken=localStorage.getItem("authorization")
    useEffect(()=>{
       fetch("http://localhost:3001/cart", {
         headers:{
            authorization:authToken
         }
       }).then((res)=>res.json()).then((data)=>{
        setCartData(data.cart)
       })
     },[]) 
  return (
    <>
        {cartdata.map((data)=>{
            return(
                <>
                <div>{data.username}</div>
                <div>{data.item_id}</div>
                </>
            )
        })}
    </>
  )
}

export default Cart;
