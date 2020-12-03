const Videogame = require('../models/videogame');

module.exports = {
  create,
  delete: deleteReview
};

function deleteReview(req, res, next) {
  Videogame.findOne({'reviews._id': req.params.id})
    .then(function(videogame) {
      // Find the review subdoc using the id method
      const review = videogame.reviews.id(req.params.id);
      // Ensure that the review was created by the logged in user
      if (!review.user.equals(req.user._id)) return res.redirect(`/videogames/${videogame._id}`);
      review.remove();
      videogame.save().then(function() {
        res.redirect(`/videogames/${videogame._id}`);
      }).catch(function(err) {
        // Let Express display an error
        return next(err);
      });
    });
}

function create(req, res) {
  // Find the videogame to embed the review within
  Videogame.findById(req.params.id, function(err, videogame) {
    // Add the user-centric info to req.body
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    // Push the subdoc for the review
    videogame.reviews.push(req.body);
    // Always save the top-level document (not subdocs)
    videogame.save(function(err) {
      res.redirect(`/videogames/${videogame._id}`);
    });
  });
}