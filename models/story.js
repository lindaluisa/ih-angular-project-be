const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StorySchema = new Schema({
  userId: String,
  message: String,
  replies: [{
    storyId: String
  }]
});

const Story = mongoose.model('User', StorySchema);
module.exports = Story;