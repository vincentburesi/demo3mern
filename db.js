import mongoose from 'mongoose'
import argv from './arguments.js'

// Connecting to database
mongoose.connect(argv.db)
const db = mongoose.connection

// Handling mongoose DB Events (printing to log)
db.once('open', () => { console.log("Connected to mongoDB") })
db.on('error', (err) => { console.log(err) })

export default db
