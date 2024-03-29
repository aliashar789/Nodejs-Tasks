const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({

name:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true,
    unique: true
},
password:{
    type: String,
    required: true
},
avatar: {
    type: String,
    default: 'https://via.placeholder.com/150',
    required: true,
  },
date:{
    type: Date,
    default: Date.now
}
  });
  module.exports = mongoose.model('user', UserSchema);