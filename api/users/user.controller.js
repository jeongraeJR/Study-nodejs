const express = require('express');
const models = require('./models');

/* let users = [
    {
      id: 1,
      name: 'alice'
    },
    {
      id: 2,
      name: 'bek'
    },
    {
      id: 3,
      name: 'chris'
    }
];

 */

exports.index=(req,res)=>{

    models.User.findAll()
    .then(users=>res.json(users));
};


exports.show=(req,res)=>{
    const id = parseInt(req.params.id,10);
    //서버의 잘못된 요청사항에 대해서는 400번 상태코드로 응답.
    console.log("req id"+req);
    //NaN ==> false와 동일
    //let user = users.filter(user=>user.id===id)[0];
    
    if(!id)
    {
        return res.status(400).json({error:'Incorrent Id'});
    } 
   
    models.User.findOne({
        where:{
            id:id
        }
    }).then(user=>{
        if(!user){
            return res.status(404).json({error:'No User'});
        }
        return res.json(user);
    });
   
};

//DELETE
exports.destroy=(req,res)=>{
    const id = parseInt(req.params.id,10);
    if(!id){
        return res.status(400).json({error:"Incorrect Id"});
    }
/* 
     models.User.destory({
         where:{
             id:id
         }
     }).then(()=>res.status(204).send()); */

     //destroy 메쏘드가 아닌 findByIdAnd remove 사용해야함.
     models.User.findByIdAndRemove({
        where:{
            id:id
        }
    }).then(()=>res.status(204).send());
};

exports.create=(req,res)=>{
    const name = req.body.name || '';
    
    //클라이언트가 name값을 입력하지 않은 경우.
    if(!name.length){
        return res.status(400).json({error:"Incorrect name"});
    }

    models.User.create({
        name:name
    }).then((user)=>res.status(201).json(user))
};

exports.update = (req,res)=>{
    res.send();
}