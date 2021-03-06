'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");

class UserController {
  async store({ request, response }) {
    const data = request.only([
      'email',
      'password',
      'name'
    ]);

    const user = await User.create(data);

    return user;
  }
}

module.exports = UserController
