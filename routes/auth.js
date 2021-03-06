const express = require('express');
const router = express.Router();

//@route   GET api/auth
//@desc    Get logged in user
//@access  Private
router.get('/', (req, res) => {
  res.send('Get Logged in User');
});

//@route   POST api/auth
//@desc    Get user and get token
//@access  Public
router.post('/', (req, res) => {
  res.send('Log in User');
});


module.exports = router;