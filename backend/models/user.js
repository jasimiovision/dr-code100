const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user', 'client'], default: 'user' },
  // permission is an array of project IDs that a specific user can access
  // only applicable to role: 'user' or 'cient'
  permission: { type: [String] }
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
