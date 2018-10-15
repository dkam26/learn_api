import mongoose from 'mongoose';
const Schema = mongoose.Schema;
require('mongoose-type-email');

const UserSchema = new Schema({
  username: String,
  firstname: String,
  secondname: String,
  password: String,
  email: String,
});

const User = mongoose.model('User', UserSchema);
export default User;
