const db = require('./db');

const User = require('./models/User');
const Badge = require('./models/Badge');

//model associations go below



//associations go above

module.exports = {
  db,
  models: { User, Badge },
};
