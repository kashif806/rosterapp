const express = require ('express');
const app = express();
require('dotenv').config();
port = process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Logged In');
})
app.get('/login',(req,res)=>{
    res.send({
        user:'Kashif Hussain',
        role:'manager',
        site:'workSite'
    })
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})