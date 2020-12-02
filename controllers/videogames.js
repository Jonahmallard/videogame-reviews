const Videogame = require('../models/videogame');

module.exports = {
  index,
  show,
  new: newGame,
  create
};

function index(req, res) {
  Videogame.find({}, function(err, videogames) {
    res.render('videogames/index', { title: 'All Videogames', videogames });
  });
}

function show(req, res) {
    Videogame.findById(req.params.id, function(err, game) {
        res.render('videogames/show', { title: 'Videogame Detail', game });
    });
}

function newGame(req, res) {
    res.render('videogames/new', { title: 'Add Game' });
  }

function create(req, res) {
    const game = new Videogame(req.body);
    game.save(function(err) {
      // one way to handle errors
      if (err) return res.render('videogames/new');
      console.log(game);
      // for now, redirect right back to new.ejs
      res.redirect('/videogames');
    });
}