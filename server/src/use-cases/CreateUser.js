const { hash } = require('bcryptjs')
const AppError  = require('../utils/AppError')

class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository
  }  

  async execute({ name, email, password }) {
    const usersEmailAlreadyExists = await this.userRepository.findByEmail(email)

    if (usersEmailAlreadyExists) {
      throw new AppError("This email is already in use.")
    }

    const hashedPassword = await hash(password, 8)

    await this.userRepository.create({ name, email, password: hashedPassword })
  }
}

module.exports = CreateUser
