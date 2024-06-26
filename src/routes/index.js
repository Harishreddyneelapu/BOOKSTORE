import express from 'express';
const router = express.Router();

import userRoute from './user.route';

import bookRoute from './book.route';

import cartRoute from './cart.route';

import wishlistRoute from './wishlist.route';

import orderRoute from './order.route';

import customerRouter from './customerDetails.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);

  router.use('/books', bookRoute);

  router.use('/cart', cartRoute);

  router.use('/wishlist', wishlistRoute);

  router.use('/order', orderRoute);

  router.use('/customer', customerRouter);

  return router;
};

export default routes;
