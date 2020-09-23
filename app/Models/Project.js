'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  // Adonis não entende os relacionamentos com base nas migrations, então estes
  // devem ser especificados nos Models

  user() {
    return this.belongsTo('App/Models/User')
    // belongsTo: Projeto pertence a um usuário
  }

  tasks() {
    return this.hasMany('App/Models/Task')
    // um projeto pode ter muitas tarefas
  }
}

module.exports = Project
