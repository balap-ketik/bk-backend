const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../app.js')

chai.use(chaiHttp)

describe('LeaderBoard Read and Add', function () {
  it('Should read leaderBoard from api', function(done) {
    chai.request(app)
      .get('/leaderboards')
      .end(function(err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.have.property('message')
        expect(res.body.message).to.equal('Success get all scores')
        expect(res.body).to.have.property('leaders')
        expect(res.body.leaders).to.be.a('array')
        done()
      })
  })
  it('Should read leaderBoard from api', function(done) {
    chai.request(app)
      .post('/leaderboards')
      .send({username: 'Test Chai', score: 100})
      .end(function(err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.have.property('message')
        expect(res.body.message).to.equal('success adding new score')
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.a('object')
        expect(res.body.data.username).to.equal('Test Chai')
        done()
      })
  })
})
