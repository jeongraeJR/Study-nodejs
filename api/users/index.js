const express = require('express');
const router = express.Router();
const app = express();


let users = [
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



router.get('/',(req,res)=>{
    //라우팅 로직
    console.log("users test");
    return res.json(users);
})


router.get(`/:id`,(req,res)=>{
    const id = parseInt(req.params.id,10);
    //서버의 잘못된 요청사항에 대해서는 400번 상태코드로 응답.
    console.log("req id"+req);
    //NaN ==> false와 동일
    let user = users.filter(user=>user.id===id)[0];
    
    if(!id)
    {
        return res.status(400).json({error:'Incorrent Id'});
    } 
   
    if(!user)
    {
        return res.status(404).json({error:'Unknown user'});
    }
    return res.json(user);
   
});

//DELETE
router.delete('/:id',(req,res)=>{
    const id = parseInt(req.params.id,10);
    if(!id){
        return res.status(400).json({error:"Incorrect Id"});
    }
   
    const userIdx = users.findIndex(user=>user.id===id);
  
    if(userIdx === -1){
        return res.status(404).json({error:"Unknown user"});
    }

    users.splice(userIdx,1);
    res.status(204).send();
})

router.post('/',(req,res)=>{
    const name = req.body.name || '';
    
    //클라이언트가 name값을 입력하지 않은 경우.
    if(!name.length){
        return res.status(400).json({error:"Incorrect name"});
    }

    //누적데이터 만드는 함수
    const id = users.reduce((maxId,user)=>{
        return user.id>maxId ? user.id:maxId
    },0)+1;

    const newUser = {
        id:id,
        name:name
    };
    users.push(newUser);

    //201 Created Code
    return res.status(201).json(newUser);
})

module.exports = router;