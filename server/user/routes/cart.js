//add to cart and delete to cart
const express=require("express");
const jwt =require("jsonwebtoken")
const cartModal=require("../modal/cart-modal");

const router=express.Router();

router.post("/add", (req, res)=> {
    console.log(req.headers.authorization, req.body);

    try {
        const username = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
        cartModal.create({username: username, item_id: req.body.itemid}).then(()=> {
            res.status(200).send("Item Added Sucessfully")
        }).catch((err)=> {
            res.status(400).send(err)
        });
    } catch(err) {
        res.status(400).send("User not authorized")
    }
    
});

router.get("/", (req, res)=> {
    try{
        const username=jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
        cartModal.find({username:username}).then((cart)=>{
            res.status(200).send({cart: cart})
        })
    }catch(err){
        res.status(400).send("user Not Authorized")
    }
    
})
//delete from cart
router.delete("/remove/:id", (req, res)=>{
    cartModal.deleteOne({id:req.params.item_id}).then(()=>{
        res.status(200).send("Removed from cart")
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

module.exports=router;