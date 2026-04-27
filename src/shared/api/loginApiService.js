export default class LoginApiService {
  baseUrl = 'http://157.22.192.187'

  async loginToAdmin(email, password) {
    const response = await fetch(`${this.baseUrl}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    })
    if (response.status === 400) throw new Error('Неверный логин или пароль')
    if (!response.ok) throw new Error(`Ошибка сервера: ${response.status}`)
    return response.json()
  }
}
