const Videogame = require('../models/videogame');

module.exports = {
  index,
  show,
  new: newGame,
  create,
  delete: deleteGame,
  edit,
  update
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
    req.body.user = req.user._id;
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

function edit(req, res) {
  Videogame.findOne({_id: req.params.id}, function(err, videogame) {
    if (err || !videogame) return res.redirect('/videogames');
    res.render('videogames/edit', {videogame});
  });
}

function update(req, res) {
  Videogame.findOneAndUpdate(
    {_id: req.params.id, user: req.user._id},
    // update object with updated properties
    req.body,
    // options object with new: true to make sure updated doc is returned
    {new: true},
    function(err, videogame) {
      if (err || !videogame) return res.redirect('/videogames');
      res.redirect(`/videogames/${videogame._id}`);
    }
  );
}

function deleteGame(req, res, next) {
  Videogame.findOne({_id: req.params.id})
    .then(function(videogame) {
      if (!req.user._id) return res.redirect('/videogames');
      videogame.remove();
      res.redirect('/videogames');
    });
}