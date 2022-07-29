import React from 'react';
import axios from "axios";
import { useEffect , useState} from 'react';

const Item =()=> {
    
    const [items, setitem]=useState([]);
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

     const handleBuy=()=>{

     }
     const handleCart=(data)=>{
        console.log(data)
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