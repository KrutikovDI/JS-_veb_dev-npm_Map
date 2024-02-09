export default class ErrorRepository {
  constructor(){
    this.repository = new Map([
      [1, 'Неверный пароль'],
      [2, 'Пользователь не зарегестрирован'],
      [3, 'Такой страницы не существует'],
      [4, 'Неверный запрос']
    ])
  }
  translate(code){
    if (this.repository.has(code)) {
      const valueError = this.repository.get(code)
      return valueError
    } else {throw new Error('Unknown error')}

  }
}