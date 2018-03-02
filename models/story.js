const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

const StorySchema = new Schema({
  owner: String,
  message: String,
  replies: [{ type: objectId, ref: 'Story' }]
});

const Story = mongoose.model('Story', StorySchema);
module.exports = Story;