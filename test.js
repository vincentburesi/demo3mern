import express from 'express'
import assert from 'assert'
import request from 'supertest'

// Dummy code
const app = express()

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

// Dummy test
describe('dummy', () => {
  it('should work', () => {
    assert(true)
  })

  it('network ?', () => {
    request(app)
      .get('/user')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '15')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      })
  })
})
