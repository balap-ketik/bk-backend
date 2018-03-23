const LeaderBoard = require('../models/leaderBoard')

module.exports = {
  getAllScore: (req,res)=>{
    LeaderBoard.find()
    .populate('userId')
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
    const score = req.body.score
    const userId = req.headers.userId
    LeaderBoard.find({
      userId:userId
      // username: req.body.username
    }).then(data=>{
      console.log(data[0])
      console.log(score)
      if(data[0] == null){
        const newLeader = new LeaderBoard ({
          score:score,
          userId:userId
          // username: req.body.username
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
      }else{
        if(Number(score) > Number(data[0].score)){
          // data[0].score = score
          let id = data[0].id
          LeaderBoard.findOneAndUpdate(id,{
            score:score
          },{new:true},(err,update)=>{
            if(!err){
              res.status(200).json({
                message:"new record!!",
              })
            }else{
              res.status(400).json({
                message:"error"
              })
            }
          })
        }
      }
    }).catch(error=>{
      res.status(400).json({
        message: "error",
        error
      })
    })
    
  }
}