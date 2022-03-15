import { mongoose as m } from 'mongoose'
const ObjectId = m.Schema.Types.ObjectId

export const User = m.model('User', new m.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    minLength: 6,
    required: true
  },
  email: {
    type: String,
    match: "^.+@.+$",
    required: true
  },
  roles: {
    type: [{
      type: String,
      enum: ["user", "admin", "guest"]
    }],
    default: ["user"],
    required: true
  },
}))

export const Article = m.model('Article', new m.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  publicationDate: {
    type: Date,
    required: true
  }
}))

export const Comment = m.model('Comment', new m.Schema({
  article: {
    type: ObjectId,
    ref: 'Article'
  },
  author: {
    type: ObjectId,
    ref: 'User'
  },
  content: String
}))
