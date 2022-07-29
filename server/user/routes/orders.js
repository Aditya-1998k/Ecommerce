const express=require("express");
const orderModal=require("../modal/order-modal")
const router=express.Router();
const jwt= require("jsonwebtoken");

router.get("/", (req, res)=>{
   // console.log(req.headers.authorization, process.env.SECTRET_KEY);
    try{
        const user=jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
        res.status(200).send(user)
    }catch(err){
        res.status(400).send("user not authorized")
    }
})

//post method for placeing our order
router.post("/add", (req,res)=>{
    orderModal.create({username:req.body.username, order_id:req.body.order_id, order_type:req.body.order_type, item_id:req.body.item_id, order_status:req.body.order_status}).then(()=>{
        res.status(200).send("order placed successfully")
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

//delete method for deleting our order
router.delete("/cancel/:id", (req, res)=>{
    orderModal.deleteOne({order_id: req.params.id}).then(()=>{
        res.status(200).send("Order Cancell successfully");
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

module.exports=router;