import Joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';

export const newUserValidatorRegister = (req, res, next) => {
  const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const schema = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    email:Joi.string().email().lowercase().required(),
    password: Joi.string()
      .regex(passwordPattern)
      .message('password must be at least 8 characters long and contain at least one special character, one uppercase letter, one lowercase letter, and one numeric character')
      .required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    role:Joi.string().required()

  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  } else {
    next();
  }
};

