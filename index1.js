const express=require('express');
const port =3000;
const app=express();
const bodyparsar=require('body-parser');
require('./db');

app.use(bodyparsar.json());


app.get('/',(req,res)=>{
    res.send('this is home page');

}
)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);

})