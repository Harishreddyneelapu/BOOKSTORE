import User from '../models/user.model';
import bcrypt from 'bcrypt'


export const newUserRegister = async (body) => {
    let res = await User.findOne({ email: body.email })
    if (res !== null) {
        throw new Error('email already exist')
    }
    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(body.password, 10, (err, hashedPassword) => {
            if (err) {
                reject(err)
            }
            resolve(hashedPassword);
        })
    })

    body.password = hashedPassword


    delete body.confirmPassword;

    const data = await User.create(body);
    const { firstName, email } = data;

    return data;
};

export const login = async(body)=>{
    let userObj = await User.findOne({email:body.email})
    if(userObj===null){
      throw new Error('Invalid Email')
    }
     const result = await new Promise((resolve, reject) => {
        bcrypt.compare(body.password, userObj.password, (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      });
    if(result){
      return userObj;
    }else{
      throw new Error('Invalid password')
    }
  };
  