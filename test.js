import chai from 'chai'
import request from 'supertest'
import db from './db.js'
import app from './app.js'

const assert = chai.assert

// Clean DB before each test
beforeEach((done) => {
  console.log("Dropping articles...")
  db.collections.articles.drop().then(() => {
    console.log("Dropped")
    done()
  }).catch((err) => {
    if (err.code == 26)
      console.log("Skipped")
    else
      console.log(err.codeName)
    done()
  })
})

describe('GET /articles', () => {
  it('list articles', (done) => {
    request(app)
      .get('/articles')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '2')
      .expect(200)
      .expect((res) => { assert.deepEqual(res.body, []); done() })
      .end((err, res) => { if (err) throw err })
  })

  it('Create article', (done) => {
    const payload = {
      title: "test article",
      content: "test content",
      publicationDate: "2022-03-12T06:00:00.000Z"
    }

    request(app)
      .post('/article')
      .send(payload)
      .expect(201)
      .expect((res) => {
        assert('_id' in res.body)
        assert.include(res.body, payload)
        done()
      })
      .end((err, res) => { if (err) throw err })
  })

})
