const { test, trait } = use('Test/Suite')('Session')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");

trait('Test/ApiClient')

test('it should return a JWT token if user is authenticated', async ({ assert, client }) => {
  const { $attributes } = await Factory.model("App/Models/User").create({ password: '123456' });

  const response = await client
    .post('/session')
    .send({
      email: $attributes.email,
      password: '123456'
    })
    .end();

  response.assertStatus(200);
  assert.exists(response.body.token);
});