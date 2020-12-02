const express = require('express');
const router = express.Router();

const videogamesCtrl = require('../controllers/videogames');

// GET /movies
router.get('/', videogamesCtrl.index)
// GET /movies/new
router.get('/new', videogamesCtrl.new);
// POST /movies
router.post('/', videogamesCtrl.create);

module.exports = router;