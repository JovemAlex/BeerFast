const express = require('express');
const registerRoutes = require('../routes/register.routes');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/register', registerRoutes);

module.exports = app;
