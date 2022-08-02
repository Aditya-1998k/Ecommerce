import React from 'react';
import axios from "axios";

import { useEffect , useState} from 'react';


const Item =()=> {
    
    const [items, setitem]=useState([]);
    const [cartData, setCartData]=useState({itemid:""})
   
     useEffect(()=>{
        axios({
            method:"GET",
            url:"http://localhost:3001/item",
        }).then((itemData)=>{
            console.log(itemData)
            setitem(itemData.data.item)
        }).catch((err)=>{
            console.log(err)
        })
     },[])   
      const authToken=localStorage.getItem("authorization")
    //  console.log(authToken)
     const handleCart=(item)=>{
        
        setCartData({...cartData,itemid: item.item_id});
        console.log(cartData)
        
        axios({
            method:"POST",
            url:"http://localhost:3001/cart/add",
            headers:{
                authorization:authToken
            },
            data:cartData
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
     }
     const handleBuy=()=>{

     }
     
return(
    <>
    <div className='container'>
        { items.map((item)=>{
            return(
                <>
                <div key={item.item_id} style={{border:"2px solid black", width:"200px", display:"inline-block", margin:"30px", textAlign:"center"}}>
                <div>
                    {item.item_name}
                </div>
                <div>
                   Price: {item.actual_price}
                </div>
                <div>
                    Price_discounted:{item.discounted_price}
                </div>
                <div>
                    {item.item_category}
                </div>
                <button type='button' onClick={handleBuy}>Buy Now</button>
                <span>                               </span>
                <button type='button' onClick={()=>{handleCart(item)}}>Add To Cart</button>
                </div>
                </>
            )
        })}

    </div>
        
    
        
    </>
)}

export default Item;