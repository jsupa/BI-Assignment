const { DataTypes } = require('sequelize')

const { sequelize } = require('../lib/db')

const File = sequelize.define('File', {
  hash: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

File.sync({ alter: true })

module.exports = File
