const CreateUser = require('./CreateUser')
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory')

describe('Create user', () => {
  it('should be able to create user', async () => {
    const user = {
      name: 'username-example',
      email: 'email-example@example.com',
      password: '1234',
    }

    const userRepositoryInMemory = new UserRepositoryInMemory()
    const createUser = new CreateUser(userRepositoryInMemory)

    const createdUser = await createUser.execute(user)

    expect(createdUser).toHaveProperty('id')
  })
})
