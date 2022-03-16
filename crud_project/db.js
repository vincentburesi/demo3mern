import mongoose from 'mongoose'
import argv from './arguments.js'

// Connecting to database
console.log("Connecting to mongoDB...")
await mongoose.connect(argv.db)
console.log("Connected")

// Handling mongoose DB Events (printing to log)
mongoose.connection.on('error', (err) => {
  console.log(err)
})

const db = mongoose.connection.db
export default db
