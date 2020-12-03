const Videogame = require('../models/videogame');

module.exports = {
  index,
  show,
  new: newGame,
  create,
  delete: deleteGame
};

function index(req, res) {
  Videogame.find({}, function(err, videogames) {
    res.render('videogames/index', { title: 'All Videogames', videogames });
  });
}

function show(req, res) {
    Videogame.findById(req.params.id, function(err, videogame) {
        res.render('videogames/show', { title: 'Videogame Detail', videogame });
    });
}

function newGame(req, res) {
    res.render('videogames/new', { title: 'Add Game' });
  }

function create(req, res) {
    const game = new Videogame(req.body);
    // game.req.body.user = req.user._id;
    // game.req.body.userName = req.user.name;
    // game.req.body.userAvatar = req.user.avatar;
    game.save(function(err) {
      // one way to handle errors
      if (err) return res.render('videogames/new');
      console.log(game);
      // for now, redirect right back to new.ejs
      res.redirect('/videogames');
    });
}

function deleteGame(req, res, next) {
  Videogame.findOne(req.body)
    .then(function(videogame) {
      if (!req.user._id) return res.redirect('/videogames');
      videogame.remove();
      res.redirect('/videogames');
    });
}