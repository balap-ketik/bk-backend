const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const leaderBoardSchema = new Schema ({
  score: Number,
  username: String
},{
  timestamps: true
})

module.exports = mongoose.model('LeaderBoard',leaderBoardSchema)