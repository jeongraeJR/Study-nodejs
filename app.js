const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use('/users',require('./api/users'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    //라우팅 로직
    console.log("users test");
    return res.end("Hello World!");
})


app.listen(3000,()=>{
    console.log('Listening port 3000!');
})
