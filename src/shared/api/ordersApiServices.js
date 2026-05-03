export default class OrdersApiServices {
  baseUrl = 'http://157.22.192.187'

  async getAllOrders() {
    const response = await fetch(`${this.baseUrl}/api/orders/`, {
      method: 'Get',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
    if (!response.ok) throw new Error(`Ошибка сервера: ${response.status}`)
    return response.json()
  }

  async createOrder(orderData) {
    try {
      const response = await fetch(`${this.baseUrl}/api/orders/create/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(orderData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `Ошибка сервера: ${response.status}`)
      }

      return data
    } catch (error) {
      console.error('Create order error:', error)
      throw error
    }
  }
}
