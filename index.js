require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/blogRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/blogs', routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});