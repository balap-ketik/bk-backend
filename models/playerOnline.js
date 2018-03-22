const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerOnlineSchema = new Schema({
  username: String
},{
  timestamps: true
});

module.exports = mongoose.model('PlayerOnline', playerOnlineSchema);