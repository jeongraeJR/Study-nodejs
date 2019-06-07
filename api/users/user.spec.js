const should = require('should'); 
const app = require('../../app');
const request = require('supertest');

describe('PUT /:id',()=>{
    it.only('should return 200 status code',(done)=>{
        console.log("app"+app);
        request(app)
        .put('/1')
        .send({
            name:'foo'
        })
        .end(
            (err,res)=>{
                if(err) throw err;
                done();
            }
        )
    })
})
