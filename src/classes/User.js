const defaultUser = {name: '', phone: '', parentName: null}

export class User {
  id
  name
  phone
  parent

  constructor (id = null, model = defaultUser) {
    if (!id && typeof model !== 'object') {
      throw new Error('Ошибка создания пользователя')
    }
    this.id = id
    this.name = model.name || ''
    this.phone = model.phone || ''
    this.parent = model.parent || null
  }
}
