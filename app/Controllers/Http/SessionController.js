'use strict'

class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.only([
      'email',
      'password'
    ]);
    
    const res = await auth.attempt(email, password);

    return res;
  }
}

module.exports = SessionController
