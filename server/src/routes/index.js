const { Router } = require('express')

const usersRouter = require('./users.routes')
const sessionRouter = require('./session.routes')
const notesRouter = require('./notes.routes')
const tagsRouter = require('./tags.routes')

const routes = Router()
routes.use('/users', usersRouter)
routes.use('/session', sessionRouter)
routes.use('/notes', notesRouter)
routes.use('/tags', tagsRouter)

module.exports = routes
