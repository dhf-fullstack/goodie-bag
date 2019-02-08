'use strict'

const db = require('./database')

const Candy = require('./models/Candy.js')
// const Owner = require('./owner')

// After you've required all of your models into this module, you should establish
// associations (https://sequelize-guides.netlify.com/association-types/) between them here as well!
// Example:
//
// Puppy.belongsTo(Owner)

module.exports = {
  db,
  Candy
}
