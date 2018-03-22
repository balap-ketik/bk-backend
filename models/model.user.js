const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('User', new Schema({
    username : String,
},{
    timestamps : true,
})) 