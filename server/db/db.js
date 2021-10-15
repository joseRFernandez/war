const Sequelize = require('sequelize');
const pkg = require('../../package.json');

const databaseName = pkg.name;

const config = {
  logging: false,
};

// if/when app is deployed onto Heroku the below will be needed
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const db = new Sequelize(`postgres://localhost:5432/${databaseName}`,
  config
);

module.exports = db;
