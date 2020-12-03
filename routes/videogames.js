const express = require('express');
const router = express.Router();
const videogamesCtrl = require('../controllers/videogames');
const isLoggedIn = require('../config/auth');

// GET /movies
router.get('/', videogamesCtrl.index)
// GET /movies/new
router.get('/new', isLoggedIn, videogamesCtrl.new);
// GET /videogames/:id
router.get('/:id', videogamesCtrl.show);
// POST /movies
router.post('/', isLoggedIn, videogamesCtrl.create);
// DELETE /videogames/:id
router.delete('/:id', isLoggedIn, videogamesCtrl.delete);



module.exports = router;