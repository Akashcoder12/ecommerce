const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
     name:{
        type:String,
        required:true
     },

     price:{
         type:Number,
         required:true
     },
     image:{
         type:String,
         required:false
     },
     createdAt:{
         type:Date,
         default:Date.now
     }
});

const Product=mongoose.model('Product',productSchema);
module.exports=Product;
