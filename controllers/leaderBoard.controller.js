const LeaderBoard = require('../models/leaderBoard')

module.exports = {
  getAllScore: (req,res)=>{
    LeaderBoard.find()
    .sort({score:'desc'})
    .limit(10)
    .exec()
    .then(leaders => {
      res.status(200).json({
        message: "Success get all scores",
        leaders
      })
    }).catch(error => {
      res.status(400).json({
        message: "Failed get all scores",
        error
      })
    })

  },
  addScore: (req,res)=>{
    const {username,score}= req.body
      const newLeader = new LeaderBoard ({
        username: username,
        score: score
      })
      newLeader.save().then(data=>{
        res.status(200).json({
          message:"success adding new score",
          data
        })
      }).catch(error=>{
        res.status(200).json({
          message: "failed add new score/leader",
          error
        })
      })
  }
}