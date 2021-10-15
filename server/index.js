const { db } = require('./db'); //need to create db
const PORT = process.env.PORT || 3001;
const app = require('./app');

const init = async () => {
  try {
    await db.sync(); // remove force:true after testing
  } catch (err) {
    console.log(err);
  }
  // create a 'server' object
  const server = () =>
    app.listen(PORT, () => {
      console.log(`ready to deal on port ${PORT}...`);
    });
  server();
};

init();
