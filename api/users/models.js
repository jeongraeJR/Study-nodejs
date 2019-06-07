const Sequelize = require('sequelize');
const sequelize = new Sequelize('study_test','root','study',{
    host:'localhost',
    dialect:'mysql'
})
//dialect 에러 발생, 명시해줘야함

//define() 모델정의
const User = sequelize.define('user',{
    name:Sequelize.STRING
})

module.exports={
    sequelize:sequelize,
    User:User
}