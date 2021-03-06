const mongoose = require('mongoose')
const { MONGODB_URI } = require('../utils/config')

const mongoUrl = MONGODB_URI;
console.log(mongoUrl)

mongoose
  .connect(mongoUrl)
  .then( () => {
    console.log('connected to MongoDB');
  })
  .catch ( (error) => {
    console.log('error connecting to MongoDB:', error.message);
  })

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

module.exports = mongoose.model('Blog', blogSchema);



