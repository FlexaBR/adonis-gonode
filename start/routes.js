'use strict'

const ProjectController = require('../app/Controllers/Http/ProjectController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')

Route.post('passwords', 'ForgotPasswordController.store').validator('ForgotPassword')
Route.put('passwords', 'ForgotPasswordController.update').validator('ResetPassword')

Route.get('/files/:id', 'FileController.show')

// rotas autenticadas
Route.group(() => {
  Route.post('/files', 'FileController.store')

  // Rota que satisfaz todos os métodos do controle
  // apiOnly exclui os métodos create e edit
  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map(
      [
        [
          ['projects.store'],
          ['Project']
        ],
        [
          ['projects.update'],
          ['ProjectUpdate']
        ]
      ]
    ))

  // utilizado somente onde o filho(tasks) só existe com o pai criado(projects)
  Route.resource('projects.tasks', 'TaskController')
    .apiOnly()
    .validator(new Map(
      [
        [
          ['projects.tasks.store'],
          ['Task']
        ]
      ]
    ))
}).middleware(['auth'])


