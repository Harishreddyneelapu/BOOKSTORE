import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    confirmPassword: {
      type: String
    },
    role: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
