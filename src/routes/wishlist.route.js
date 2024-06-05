import express from 'express';
import * as WishlistController from '../controllers/wishlist.controller';
import {userAuth} from '../middlewares/auth.middleware';


const router = express.Router();

router.get('',userAuth, WishlistController.getWishlistDetails);

export default router;