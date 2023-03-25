class UserRepositoryInMemory {
  users = []

    async findByEmail(email) {
        return this.users.find(user => user.email === email)
    }

  async create({ name, email, password }) {
    const user = {
        id: Math.floor(Math.random() * 1000) + 1,
        name,
        email,
        password
    }

    this.users.push(user)

    console.log(this.users)

    return user
  }
}

module.exports = UserRepositoryInMemory;
