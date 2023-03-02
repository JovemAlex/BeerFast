const express = require('express');
const cors = require('cors');
const registerRoutes = require('../routes/register.routes');
const loginRouter = require('../routes/loginRouter');
const productRouter = require('../routes/productsRouter');
const customerOrderRouter = require('../routes/customerOrderRouter');
const sellerOrdersRouter = require('../routes/sellerOrdersRouter');

const errorMiddleware = require('../middlewares/error');
// const corsOptions = {
//   origin: 'http://localhost:3000',
// };

const app = express();

app.use(express.json());

// app.use((_req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers',
//    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//   res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
//   next();
// });

app.use(cors());

app.use('/images', express.static(`${__dirname}/images`));
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);
app.use('/customer/products', productRouter);
app.use('/register', registerRoutes);
app.use('/customer/orders', customerOrderRouter);
app.use('/seller/orders', sellerOrdersRouter);

app.use(errorMiddleware);

module.exports = app;
