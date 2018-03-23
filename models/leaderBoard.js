const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const leaderBoardSchema = new Schema ({
  score: Number,
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  username: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('LeaderBoard',leaderBoardSchema)