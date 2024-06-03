import express from 'express';
import * as BooksController from "../controllers/book.controller"
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();


router.get('', userAuth, BooksController.getAllbooks);


router.get('/:_id',userAuth,BooksController.getBookById);


router.put('/:_id',userAuth,BooksController.updateBookById);

router.delete('/:_id',userAuth,BooksController.deleteBookById)

export default router;