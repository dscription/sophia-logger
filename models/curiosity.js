var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var curiositySchema = new Schema(
  {
    question: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Curiosity', curiositySchema);
