const { Router} = require('express')

const NotesController = require('../controllers/NotesController')

const notesController = new NotesController()

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesRoutes = Router()

notesRoutes.use(ensureAuthenticated)

notesRoutes.post('/', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.get('/', notesController.index)
notesRoutes.delete('/:id', notesController.delete)

module.exports = notesRoutes
