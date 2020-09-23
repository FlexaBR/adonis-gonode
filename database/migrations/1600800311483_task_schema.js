'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up() {
    this.create('tasks', (table) => {
      table.increments()
      table
        .integer('project_id')
        .unsigned() // força apenas valores positivos
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE') // se o projeto for exccluído, suas tarefas também são.
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('title').notNullable()
      table.text('description')
      table.timestamp('due_date') // data que a tarefa precisa estar finalizada.
      table.timestamps()
    })
  }

  down() {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
