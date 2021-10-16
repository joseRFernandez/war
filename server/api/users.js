const router = require('express').Router();
const {
  models: { User },
} = require('../db');
module.exports = router;

// endpoint for all users in db
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    console.log(users);
    res.send(users);
  } catch (err) {
    next(err);
  }
});

// endpoint for a specific user
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    console.log(user);
    res.send(user);
  } catch (err) {
    next(err);
  }
});
