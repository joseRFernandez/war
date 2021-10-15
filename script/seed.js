const {
  db,
  models: { User, Badge },
} = require('../server/db');

const { users } = require('./seedData');

async function seed() {
  //clears db and matches models to tables
  try {
    await db.sync({ force: true });
    console.log('db synced!');

    //   // Create Users
    for (let i = 0; i < users.length; i++) {
      await User.create(users[i]);
    }

    console.log(`Seeded ${users.length} players!`);
    console.log('Seeded successfully!');
  } catch (err) {
    console.log(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

seed();
module.exports = seed;
