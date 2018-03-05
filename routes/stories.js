const express = require('express');
const router = express.Router();
const Story = require('../models/story')

/* POST create new story. */
router.post('/', (req, res, next) => { 

  const message = req.body.event;
  const owner = req.session.currentUser;
  const replies = [];

  const newStory = new Story({
    owner: owner,
    message: message,
    replies: replies
  })

  newStory.save()
  .then(() => { 
    res.json(newStory) 
  })
  .catch(next);
});

module.exports = router;

