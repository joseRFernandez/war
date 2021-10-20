const router = require('express').Router();
const {
  models: { User },
} = require('../db')
module.exports = router;

router.use('/users', require('./users'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
})

router.get('/my-stats', async (req, res, next) => {
  try {
    let stats = await User.findAll();
    console.log(stats);
    res.send(stats)
  } catch(err){
    next(err)
  }
})
