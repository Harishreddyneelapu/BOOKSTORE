import express from 'express';
import * as CartController from '../controllers/cart.controller';
import {userAuth} from '../middlewares/auth.middleware';


const router = express.Router();

router.get('',userAuth, CartController.getCartDetails);

router.post('/add/:_id',userAuth,CartController.addToCart);

export default router;