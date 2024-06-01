import express from 'express';
import * as userController from '../controllers/user.controller';
import * as validator from '../validators/user.validator';


const router = express.Router();


router.post('/userRegister', validator.newUserValidatorRegister, userController.newUserRegister);

router.post('/adminRegister', validator.newAdminValidatorRegister, userController.newAdminRegister);


export default router;
