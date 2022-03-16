import chai from 'chai'
import request from 'supertest'
import app from '../app.js'
import db from '../db.js'

const assert = chai.assert

export default function suite() {

  describe('GET /articles', () => {
    it('list articles', (done) => {
      request(app)
        .get('/articles')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect((res) => {
          assert.deepEqual(res.body, [])
          done()
        })
        .end((err, res) => {
          if (err)
            throw err
        })
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
}
