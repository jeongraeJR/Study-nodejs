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

    //force :true 무조건 테이블을 새로 만듦 false:있을경우 생성하지 않음.
    require('./api/users/models').sequelize.sync({force:true})
    .then(()=>{
        console.log('Databases sync');
    });
});

module.exports = app;