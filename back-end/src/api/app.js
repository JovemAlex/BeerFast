const express = require('express');
const registerRoutes = require('../routes/register.routes');
const loginRouter = require('../routes/loginRouter');
const productRouter = require('../routes/productsRouter');

const app = express();

app.use(express.json());
app.use('/images', express.static(`${__dirname}/images`));
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/register', registerRoutes);

module.exports = app;
