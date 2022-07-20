const express=require("express");
const itemModal=require("../modal/item-modal");

const router=express.Router();

router.get("/", (req, res)=>{
    itemModal.find().then((itemData)=>{
        res.status(200).send({item: itemData})
    })
})

//if you want to add data then use below 
router.post("/add", (res, req)=>{
    itemModal.insertMany(req.body.item).then(()=>{
        res.status(200).send("Data added")
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

module.exports=router;