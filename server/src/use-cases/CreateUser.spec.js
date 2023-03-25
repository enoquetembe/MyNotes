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

  it('should not be able to create a user with an existing email', async () => {
    const user1 = {
      name: 'user1',
      email: 'email-example@example.com',
      password: '1234',
    }

    const user2 = {
      name: 'user2',
      email: 'email-example@example.com',
      password: '1234',
    }

    const userRepositoryInMemory = new UserRepositoryInMemory()
    const createUser = new CreateUser(userRepositoryInMemory)

    await createUser.execute(user1)

    expect(createUser.execute(user2)).rejects.toEqual(new AppError('This email is already in use.'))

  })
})
