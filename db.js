const mongoURI= "mongodb+srv://sanjay:sanjay1234@sanjay.p3lgynu.mongodb.net/?retryWrites=true&w=majority";
// const dotenv=require('dotenv').config();
const mongoose =require("mongoose");
//    require('dotenv').config();       // for env file 




mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


/*
mongoose.connection.on('connect',()=>
{
    console.log("connected to mongo db ");

})


mongoose.connection.on('error',(err)=>{
    console.log("this is err",err);
})
*/
