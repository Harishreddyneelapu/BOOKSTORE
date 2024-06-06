import express from 'express';
import * as userController from '../controllers/user.controller';
import * as validator from '../validators/user.validator';
import { roleAdmin, roleUser } from '../middlewares/role.middleware';

const router = express.Router();

router.post(
  '/userRegister',
  validator.newValidatorRegister,
  roleUser,
  userController.newRegister
);

router.post(
  '/adminRegister',
  validator.newValidatorRegister,
  roleAdmin,
  userController.newRegister
);

router.post('/login', validator.login, userController.login);

export default router;
