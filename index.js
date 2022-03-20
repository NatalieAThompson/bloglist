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
app.get('/', (req, res) => {
  res.send('Main');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});