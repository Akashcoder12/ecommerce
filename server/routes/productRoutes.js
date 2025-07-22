const express=require('express');
const router=express.Router();
const Product=require('../models/Product');

router.get('/',async(req,res)=>{
    const products=await Product.find();
    res.json(products);
});

router.post('/',async(req,res)=>{
     try{
         const {name,price,image}=req.body;
         const newProduct=new Product({name,price,image});
         await newProduct.save();
         res.status(201).json(newProduct);
     }
     catch(err){
         console.error("Error adding product:", err);
         res.status(500).json({error:"failed to add product"});
     }
});

module.exports=router;