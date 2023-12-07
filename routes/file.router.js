const { Router } = require('express')
const multer = require('multer')

const fileController = require('../controllers/file.controller')

const router = Router()
const upload = multer()

/**
 * @openapi
 * /file:
 *  post:
 *   summary: Upload a file
 *   description: Upload a file
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       type: object
 *       properties:
 *        file:
 *         type: string
 *         format: binary
 *   responses:
 *    200:
 *     description: File uploaded
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         size:
 *          type: integer
 *          description: File size in bytes
 *         hash:
 *          type: string
 *          description: File hash
 */

router.post('/', upload.single('file'), fileController.create)

module.exports = router
