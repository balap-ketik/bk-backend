const PlayerOnline = require('../models/playerOnline')

module.exports = {
  
  addOnlinePlayer: (val) => {
    const online = new PlayerOnline({
      username: val
    })
    online.save((err,data) => {
      if(err) {
        console.error();
      } else {
        console.log(data);
      }
    })
  },

  showOnlinePlayer: () => {
    PlayerOnline.find()
    .exec()
    .then(data => {
      res.status(200).json({
        message: 'here \'s your player',
        data: data
      })
    })
  },

  deleteOnlinePlayer: (req,res) => {
    PlayerOnline.deleteOne({username: req.body.username}, (err,r) => {
      if(err) {
        res.status(404).json({
          message: err
        })
      } else {
        res.status(200).json({
        message: 'Delete data success',
        data: r
        })
      }
    })
  }

}