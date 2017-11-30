import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ideaSchema = new Schema({
    title: {
      type: String,
      required: 'Kindly enter the title of the idea'
    },
    createdDate: {
      type: Date,
      default: Date.now
    },
    executionDate: {
        type: Date
      },
      meta: {
        vote: [{
            type: String,
            enum: ['noVote', 'upVote', 'downVote']
          }],
        voterEmail: String
      },
      meta: {
        comments: String,
        commentBy: String,
        commentDate: {
            type:Date,
            default: Date.now
        }
      },
      isEdited: Boolean,
      createdBy: String,
      ideaCategory: String
  });
  
const Idea = mongoose.model('Idea', ideaSchema);

module.exports = Idea;