const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

const StorySchema = new Schema({
  owner: { type: objectId, ref: 'User' },
  message: String,
  replies: [ 
    {
      author: { type: objectId, ref: 'User' },
      reply: String
    } 
  ]
});

const Story = mongoose.model('Story', StorySchema);
module.exports = Story;