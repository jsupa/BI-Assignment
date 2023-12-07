const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: process.env.npm_package_name,
      version: process.env.npm_package_version
    }
  },
  apis: ['./routes/*.router.js']
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = swaggerSpec
