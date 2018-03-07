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

/* GET all stories of one user */
router.get('/user-stories/:id', (req, res, next) => {
  const userId = req.params.id;
  Story.find({ owner: userId }, (err, stories) => {
    if (err) { return res.json(err).status(500); }

    return res.json(stories);
  });
});

/* GET one story of one user. */
router.get('/user-story/:id', (req, res, next) => {
  const storyId = req.params.id;
  Story.findById(storyId, (err, story) => {
    if (err) { return res.json(err).status(500); }

    return res.json(story);
  });
});

/* POST one reply in a story. */
router.post('/new-reply', (req, res, next) => {
  // console.log(req);
  const storyId = req.body.storyId;
  const currentUser = req.session.currentUser._id;
  const message = req.body.reply;
console.log(req.body)
  Story.findByIdAndUpdate(storyId, { $push: {replies: {author: currentUser, reply: message}}}, {new: true}, (err, story) => {
    if (err) { return res.json(err).status(500); }

    return res.json(story);
  });
});

module.exports = router;

