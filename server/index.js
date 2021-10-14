// const { db } = require('./db'); //need to create db
const PORT = process.env.PORT || 3001;
const app = require('./app');
// const seed = require('../script/seed'); // need to create seed file after db

const init = async () => {
  try {
    // if (process.env.SEED === 'true') {
    //   await seed();
    // } else {
    //   await db.sync(); // remove force:true after testing
    // }
    // create a 'server' object
    const server = app.listen(PORT, () => {
      console.log(`ready to deal on port ${PORT}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

init();
