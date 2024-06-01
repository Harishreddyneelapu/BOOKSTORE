import express from 'express';
import * as userController from '../controllers/user.controller';
import * as validator from '../validators/user.validator';


const router = express.Router();


router.post('', validator.newUserValidatorRegister, userController.newUserRegister);


export default router;
