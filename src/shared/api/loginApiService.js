import { useDentalStore } from '@/app/stores/store'

const dentalStore = useDentalStore()

export default class LoginApiService {
  async loginToAdmin(email, password) {
    const response = await fetch(`${dentalStore.baseUrl}/api/login`, {
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
