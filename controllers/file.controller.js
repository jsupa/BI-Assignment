const crypto = require('crypto')
const File = require('../models/file.model')

const controller = {}

controller.create = async (req, res, next) => {
  try {
    if (!req.file) throw new Error('File is required')

    const { size } = req.file

    const hash = crypto.createHash('sha1').update(req.file.buffer).digest('hex')

    const file = await File.create({ size, hash })

    res.json({ size: file.size, hash: file.hash })
  } catch (err) {
    next(err)
  }
}

module.exports = controller
