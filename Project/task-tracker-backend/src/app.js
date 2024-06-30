const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api/v1/tasks',taskRoutes);

module.exports = app;