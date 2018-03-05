const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) { return res.json(err).status(500); }

    return res.json(users);
  });
});

/* GET user profile. */
router.get('/:id', (req, res, next) => {
  User.findById((req.params.id), (err, user) => {
    if (err) { return res.json(err).status(500); }
    return res.json(user);
  });
});

module.exports = router;
