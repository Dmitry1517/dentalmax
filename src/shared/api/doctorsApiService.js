export default class DoctorsApiService {
  baseUrl = 'http://157.22.192.187'

  async getAllDoctors() {
    try {
      const response = await fetch(`${this.baseUrl}/api/doctors/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`)
      }

      const data = await response.json()
      console.log('Doctors API raw response:', data)

      return data
    } catch (error) {
      console.error('Get all doctors error:', error)
      throw error
    }
  }

  async getAllSpecialities() {
    try {
      const response = await fetch(`${this.baseUrl}/api/specialities/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`)
      }

      const data = await response.json()
      console.log('Specialities API raw response:', data)

      return data
    } catch (error) {
      console.error('Get all specialities error:', error)
      throw error
    }
  }

  async createSpeciality(name) {
    try {
      const response = await fetch(`${this.baseUrl}/api/specialities/create/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `Ошибка сервера: ${response.status}`)
      }

      return data
    } catch (error) {
      console.error('Create speciality error:', error)
      throw error
    }
  }

  async createDoctor(formData) {
    try {
      const response = await fetch(`${this.baseUrl}/api/doctors/create/`, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `Ошибка сервера: ${response.status}`)
      }

      return data
    } catch (error) {
      console.error('Create doctor error:', error)
      throw error
    }
  }
}
