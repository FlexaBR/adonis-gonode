'use strict'

const Model = use('Model')
const Env = use('Env')

class File extends Model {
  // esse campo é virtual não existe na tabela do db, mas vem junto qdo
  // chamarmos o file. Disponibiliza o caminho, url.

  static get computed() {
    return ['url']
  }

  getUrl({ id }) {
    return `${Env.get('APP_URL')}/files/${id}`
  }
}

module.exports = File
