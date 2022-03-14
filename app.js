import express from 'express'
import bodyParser from 'body-parser'

import argv from './arguments.js'
import db from './db.js'
import auth_module from './auth_module.js'
import { User, Comment, Article } from './schemas.js'

const app = express()

app.use(bodyParser.json())
app.use(auth_module)

app.get('/articles', async (req, res) => {
  const articles = await Article.find()
  console.log(articles)
  res.send(articles)
})

app.get('/article/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  if (article)
    res.send(article)
  else {
    res.status(404)
    res.send({error: "Article not found"})
  }
})

app.post('/article', (req, res) => {
  Article.create(req.body, (err, doc) => {
    if (err) {
      console.log(err)
      res.status(400)
      res.send(err)
    } else {
      res.status(201)
      res.send(doc)
    }
  })
})

app.delete('/article', (req, res) => {
  Article.findByIdAndDelete(req.params.id, (err) => {
    if (err)
      res.status(404)
    else
      res.status(200)
    res.send()
  })
})

app.put('/article/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
    if (err) {
      res.status(400)
      res.send(err)
    } else {
      if (!doc)
        res.status(404)
      else
        res.status(200)

      res.send()
    }
  })
})

export default app
