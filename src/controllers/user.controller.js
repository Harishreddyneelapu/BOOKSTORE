import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
import jwt from 'jsonwebtoken';

export const newRegister = async (req, res) => {
  try {
    const data = await UserService.newUserRegister(req.body);
    const { firstName, lastName, email, role } = data;

    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      success: true,
      message: 'User created successfully',
      data: {
        firstName,
        lastName,
        email,
        role
      }
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      success: false,
      message: `${error}`
    });
  }
};

export const login = async (req, res) => {
  try {
    const data = await UserService.login(req.body);
    const { _id, firstName, email, role } = data;

    const token = jwt.sign(
      { _id: _id, email: email, role: role },
      process.env.SECRET_KEY,
      { expiresIn: '2h' }
    );

    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      success: true,
      message: 'User Found in our dataBase',
      data: {
        _id,
        firstName,
        email,
        token
      }
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      success: false,
      message: `${error}`
    });
  }
};
