const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: { type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true }},
  description: { type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true }},
  quantity: { type: Sequelize.INTEGER, validate: { max: 10 }},
  imageUrl: { type: Sequelize.STRING, defaultValue: 'http://www.4usky.com/data/out/16/164119044-candy-wallpapers.jpg' }
});
