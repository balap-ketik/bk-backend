const app = require('../app')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('API User Sign In',()=>{
    it('should be show login status', done=>{
        chai.request(app)
        .post('/users')
        .send({
            usernama : 'username'
        })
        .end((err, res)=>{
            expect(res.body).to.ownProperty('message')
            expect(res.body).to.ownProperty('dataUser')
            expect(res.body.message).to.be.a('string').eql('logged in')
            done()
        })
    })
})