const mongoose = require('mongoose')
require('dotenv').config()

const dbRoute =
  'mongodb+srv://' +
  process.env.DB_USER +
  ':' +
  process.env.DB_PASSWORD +
  '@' +
  process.env.DB_HOST

var db

module.exports = {
  connectToMongoDB() {
    // Connects Backend to MongoDB
    mongoose.connect(dbRoute, { useNewUrlParser: true })
    db = mongoose.connection

    // Once Connected to MongoDB, Print this
    db.once('open', () => console.log('connected to the database'))

    // If there is an error, Print this
    db.on('error', console.error.bind(console, 'MongoDB connection error:'))
  },

  getDatabase() {
    return db
  },
}