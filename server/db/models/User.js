const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  userName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  wins: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  losses: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  profileImg: {
    type: Sequelize.STRING,
    defaultValue: '/static-images.default-profile-image.png',
  },
});


module.exports = User;
