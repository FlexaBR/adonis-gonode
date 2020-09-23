'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)
    // como foi configurado no inicio do projeto: API only
    // Adonis entende que é para retornar um JSON de user
    return user
  }
}

module.exports = UserController
