const Blog = require('../models/blog');

const viewBlog = (requset, response) => {
  Blog
  .find({})
  .then(blogs => {
    response.json(blogs)
  })
}

const createBlog = (request, response) => {
  console.log(request.body)
  const blog = new Blog(request.body)
  console.log(blog)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
}

module.exports = {
  viewBlog,
  createBlog,
}