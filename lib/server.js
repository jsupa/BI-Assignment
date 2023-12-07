const express = require('express')
const swaggerUi = require('swagger-ui-express')

const router = require('../config/router')
const swagger = require('./swagger')

const app = express()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger))

app.use('/', router)

app.use((req, res, next) => {
  res.status(404)
  const error = new Error(`404 - Not found`)
  next(error)
})

app.use((err, _req, res, _next) => {
  res.status(res.statusCode || 500)

  const error = {
    message: err.message || 'Internal Server Error',
    errors: err.errors || undefined
  }

  res.json(error)
})

app.listen(3000, () => console.log('Swagger listening on http://localhost:3000/api-docs'))

module.exports = app
