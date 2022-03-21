const express = require("express");
const router = express.Router();

const Blog = require('../controllers/blogs');

router.get('/', Blog.viewBlog);

router.post('/', Blog.createBlog);

module.exports = router;