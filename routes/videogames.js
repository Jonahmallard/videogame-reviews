const express = require('express');
const router = express.Router();
const videogamesCtrl = require('../controllers/videogames');
// const isLoggedIn = require('../config/auth');

// GET /videogames
router.get('/', videogamesCtrl.index)
// GET /videogames/new
router.get('/new', videogamesCtrl.new); // removed isLoggedIn temporarily
// GET /videogames/:id
router.get('/:id', videogamesCtrl.show);
// POST /videogames
router.post('/', videogamesCtrl.create); // removed isLoggedIn temporarily
// GET /videogames/:id/edit
router.get('/:id/edit', videogamesCtrl.edit); // removed isLoggedIn temporarily
// Put /videogames/:id
router.put('/:id', videogamesCtrl.update); // removed isLoggedIn temporarily
// DELETE /videogames/:id
router.delete('/:id', videogamesCtrl.delete); // removed isLoggedIn temporarily



module.exports = router;