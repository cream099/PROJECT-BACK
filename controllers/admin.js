const db = require('../models/db')

exports.getByUser = async (req, res, next) => {
    try {
      const users = await db.user.findMany({
      })
      res.send({users})
    } catch (error) {
      next(error)
    }

  }