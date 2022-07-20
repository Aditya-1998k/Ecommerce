const mongoose=require("mongoose");


//type-->whatever datatype you want
//required:true means without that got err
//minLength and maxLength
const cartSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    item_id: {
        type: String,
        required:true
    }
});

//once our schema is created now we need to create our modal
//use mongoose.modal to create modal so that you can export it to whereeverr you want to use
//mongoose.modal("first is collection name that is created inyour database", "second is your schema")
const cartModal=mongoose.model("cart", cartSchema);
module.exports=cartModal;