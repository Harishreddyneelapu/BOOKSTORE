import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

export const newUserRegister = async (req, res, next) => {
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
      },
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      success: false,
      message: `${error}`
    });
  }
};
