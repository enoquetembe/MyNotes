const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const { compare } = require('bcryptjs')

class SessionController {
  async create(request, response) {
    const {email, password}  = request.body

    const user = await knex('users').where({email}).first()
    if(!user) {
      throw new AppError('Incorrect email and/or password', 401)
    }

    const passwordMatched = await compare(password, user.password) 
    if(!passwordMatched) {
      throw new AppError('Incorrect email and/or password', 401)
    }

    response.json(user)
  }
}

module.exports = SessionController
