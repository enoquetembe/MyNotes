class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    response.send({
      name,
      email,
      password,
    })
  }
}

module.exports = UsersController
