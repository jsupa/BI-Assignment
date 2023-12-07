const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('bi_filehash_db', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = { sequelize }
