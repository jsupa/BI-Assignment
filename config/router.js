const { Router } = require('express')

const fileRouter = require('../routes/file.router')

const router = Router()

router.use('/file', fileRouter)

module.exports = router
