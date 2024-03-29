const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: false,
        unique: true
    },
    number: {
        type: String, // Change this to Number if you want to store a numeric value
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('user', UserSchema);