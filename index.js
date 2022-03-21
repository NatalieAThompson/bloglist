require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const Blog = require('./models/blog');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
});


app.post('/api/blogs', (request, response) => {
  console.log(request.body)
  const blog = new Blog(request.body)
  console.log(blog)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});