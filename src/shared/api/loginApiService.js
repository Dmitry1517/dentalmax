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

  async logout() {
    try {
      const response = await fetch(`${this.baseUrl}/api/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || `Ошибка сервера: ${response.status}`)
      }

      return data
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  }

  async getUsers() {
    try {
      const response = await fetch(`${this.baseUrl}/api/users/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Get users error:', error)
      throw error
    }
  }

  async createUser(userData) {
    try {
      const response = await fetch(`${this.baseUrl}/api/users/create/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(userData),
      })

      const data = await response.json()

      if (!response.ok || !data.ok) {
        throw new Error(data.error || `Ошибка сервера: ${response.status}`)
      }

      return data
    } catch (error) {
      console.error('Create user error:', error)
      throw error
    }
  }

  async deleteUser(userId) {
    try {
      const response = await fetch(`${this.baseUrl}/api/users/${userId}/delete/`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })

      const data = await response.json()

      if (!response.ok || !data.ok) {
        throw new Error(data.error || `Ошибка сервера: ${response.status}`)
      }

      return data
    } catch (error) {
      console.error('Delete user error:', error)
      throw error
    }
  }

  async getAllUsers() {
    try {
      const response = await fetch(`${this.baseUrl}/api/users/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Get all users error:', error)
      throw error
    }
  }

  async getUserById(userId) {
    try {
      const response = await fetch(`${this.baseUrl}/api/users/${userId}/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Пользователь не найден')
        }
        throw new Error(`Ошибка сервера: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Get user by id error:', error)
      throw error
    }
  }
}
