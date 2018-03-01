const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StorySchema = new Schema({
  owner: { type: objectId, ref: 'User' },
  message: String,
  replies: [{ type: objectId, ref: 'Story' }]
});

const Story = mongoose.model('Story', StorySchema);
module.exports = Story;