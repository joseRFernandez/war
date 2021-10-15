const router = require('express').Router();
const {
  models: { User },
} = require('../db');
module.exports = router;

console.log('hello')
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    console.log(users);
    res.send(users);
  } catch (err) {
    next(err);
  }
});
