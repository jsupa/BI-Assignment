const crypto = require('crypto')
const File = require('../models/file.model')
const busboy = require('busboy')

const controller = {}

controller.crete = async (req, res, next) => {
  const newFile = new File({ hash: '', size: 0 })
  const sha1 = crypto.createHash('sha1')
  const bb = busboy({ headers: req.headers })

  bb.on('file', (_name, file, _info) => {
    file.on('data', data => {
      newFile.size += data.length
      sha1.update(data)
    })

    file.on('end', () => {
      newFile.hash = sha1.digest('hex')
    })
  })

  bb.on('finish', async () => {
    try {
      await newFile.save()
      res.json({ size: newFile.size, hash: newFile.hash })
    } catch (error) {
      next(error)
    }
  })

  bb.on('error', error => {
    next(error)
  })

  try {
    req.pipe(bb)
  } catch (err) {
    next(err)
  }
}

module.exports = controller
