const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {type: String, required: true},
  rating: {type: Number, min: 1, max: 5, default: 5},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const videogameSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  },
  esrbRating: String,
  console: String,
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Videogame', videogameSchema);