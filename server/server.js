const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');
const path = require('path');
const productRoutes=require('./routes/productRoutes');


dotenv.config();
const app=express();
const PORT=process.env.PORT||5000;

//middleware
 app.use(cors());
 app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));
 //MongoDB connection

 mongoose.connect(process.env.MONGO_URI,{
     useNewUrlParser:true,
     useUnifiedTopology:true
 })
 .then(()=>{
    console.log("MongoDB Connected")
 })
 .catch((err)=>{
     console.error("MongoDB Error:",err);
 });



//Default Route
app.get('/',(req,res)=>{
      res.send('API is running...');
});


//Use Routes
app.use('/products',productRoutes);

app.listen(PORT,()=>{
     console.log(`Server running at http://localhost:${PORT}`);
});
