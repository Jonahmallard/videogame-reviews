// const Videogame = require('../models/videogame');

// Mock data for demonstration
const mockVideogames = [
  { 
    _id: '1', 
    title: 'The Legend of Zelda: Breath of the Wild', 
    genre: 'Action-Adventure', 
    releaseYear: 2017, 
    esrbRating: 'E10+', 
    console: 'Nintendo Switch',
    reviews: []
  },
  { 
    _id: '2', 
    title: 'Super Mario Odyssey', 
    genre: 'Platformer', 
    releaseYear: 2017, 
    esrbRating: 'E10+', 
    console: 'Nintendo Switch',
    reviews: []
  },
  { 
    _id: '3', 
    title: 'The Witcher 3: Wild Hunt', 
    genre: 'RPG', 
    releaseYear: 2015, 
    esrbRating: 'M', 
    console: 'PC',
    reviews: []
  }
];

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
  // Videogame.find({}, function(err, videogames) {
    res.render('videogames/index', { title: 'All Videogames', videogames: mockVideogames });
  // });
}

function show(req, res) {
    // Videogame.findById(req.params.id, function(err, videogame) {
        const videogame = mockVideogames.find(game => game._id === req.params.id);
        res.render('videogames/show', { title: 'Videogame Detail', videogame });
    // });
}

function newGame(req, res) {
    res.render('videogames/new', { title: 'Add Game' });
}

function create(req, res) {
    // Mock create - just redirect for now
    res.redirect('/videogames');
}

function edit(req, res) {
  // Mock edit - find game by id
  const videogame = mockVideogames.find(game => game._id === req.params.id);
  if (!videogame) return res.redirect('/videogames');
  res.render('videogames/edit', {videogame});
}

function update(req, res) {
  // Mock update - just redirect for now
  res.redirect('/videogames');
}

function deleteGame(req, res) {
  // Mock delete - just redirect for now
  res.redirect('/videogames');
}