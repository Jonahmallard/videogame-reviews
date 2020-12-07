const express = require('express');
const router = express.Router();
const videogamesCtrl = require('../controllers/videogames');
const isLoggedIn = require('../config/auth');

// GET /videogames
router.get('/', videogamesCtrl.index)
// GET /videogames/new
router.get('/new', isLoggedIn, videogamesCtrl.new);
// GET /videogames/:id
router.get('/:id', videogamesCtrl.show);
// POST /videogames
router.post('/', isLoggedIn, videogamesCtrl.create);
// GET /videogames/:id/edit
router.get('/:id/edit', isLoggedIn, videogamesCtrl.edit);
// Put /videogames/:id
router.put('/:id', isLoggedIn, videogamesCtrl.update);
// DELETE /videogames/:id
router.delete('/:id', isLoggedIn, videogamesCtrl.delete);



module.exports = router;