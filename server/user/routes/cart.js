//add to cart and delete to cart
const express=require("express");
const cartModal=require("../modal/cart-modal");

const router=express.Router();

router.post("/add", (req, res)=>{
    cartModal.create({username:req.body.username, item_id:req.body.item_id}).then(()=>{
        res.status(200).send("Item added to Cart")
    }).catch((err)=>{
        res.status(400).send(err)
    })
});

//delete from cart
router.delete("/remove/:id", (req, res)=>{
    cartModal.deleteOne({id:req.params.item_id}).then(()=>{
        res.status(200).send("Removed from cart")
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

module.exports=router;