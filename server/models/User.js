import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
      type: String,
      required: 'Kindly enter an email address'
    },
    registeredDate: {
      type: Date,
      default: Date.now
    },
    userName: { 
        type: String,
        required: 'Kindly enter a user name '
    },
    password: { 
        type: String,
        required: 'Kindly enter a password'
    },
      meta: {
        resetDate: [{
            type: Date,
            default: Date.Now
          }],
        previousPassword: String
      }
  });
  
const User = mongoose.model('User', userSchema);

module.exports = User;