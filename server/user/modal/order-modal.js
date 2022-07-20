///oder-modal is comprises of :order id, username, ordertype, prepaid/postpaid, item_id order_status
//to create modal we need mongoose which have property
//schema and modal

const mongoose=require("mongoose");


//type-->whatever datatype you want
//required:true means without that got err
//minLength and maxLength
const orderSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    order_id:{
        type:Number,
        required:true,
    },
    order_type:{
        type:String,
        required:true,
    },
    item_id: {
        type: String,
        required:true
    },
    order_status:{
        type: String,
        required:true
    }
});

//once our schema is created now we need to create our modal
//use mongoose.modal to create modal so that you can export it to whereeverr you want to use
//mongoose.modal("first is collection name that is created inyour database", "second is your schema")
const orderModal=mongoose.model("order", orderSchema);
module.exports=orderModal;