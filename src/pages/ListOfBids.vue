<template>
  <main class="main">
    <div class="page-header">
      <h1 class="page-title">Заявки на запись</h1>
    </div>

    <!-- Сообщение об ошибке -->
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
      <button class="close-btn" @click="errorMessage = ''">×</button>
    </div>

    <!-- Лоадер -->
    <div v-if="isLoading" class="loader">
      <div class="spinner"></div>
    </div>

    <!-- Таблица с заявками -->
    <div v-else class="table-card">
      <div class="grid-table">
        <!-- Header -->
        <div class="grid-row grid-row--header">
          <div class="cell cell--head cell--id">ID</div>
          <div class="cell cell--head cell--fio">ФИО</div>
          <div class="cell cell--head cell--email">Email</div>
          <div class="cell cell--head cell--phone">Телефон</div>
          <div class="cell cell--head cell--date">Дата</div>
          <div class="cell cell--head cell--question">Комментарий</div>
        </div>

        <!-- Rows -->
        <div v-for="order in orders" :key="order.id" class="grid-row">
          <div class="cell cell--id">{{ order.id }}</div>
          <div class="cell cell--fio">{{ order.fio || '—' }}</div>
          <div class="cell cell--email">{{ order.email || '—' }}</div>
          <div class="cell cell--phone">{{ order.phone || '—' }}</div>
          <div class="cell cell--date">{{ formatDate(order.date) }}</div>
          <div class="cell cell--question question-text">{{ order.question || '—' }}</div>
        </div>

        <!-- Пустое состояние -->
        <div v-if="orders.length === 0" class="empty-state">Нет заявок</div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import OrdersApiServices from '@/shared/api/ordersApiServices'

const ordersApiServices = new OrdersApiServices()

const orders = ref([])
const isLoading = ref(true)
const errorMessage = ref('')

// Форматирование даты
const formatDate = (dateString) => {
  if (!dateString) return '—'

  const date = new Date(dateString)
  if (isNaN(date.getTime())) return dateString

  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

// Загрузка всех заявок
const loadOrders = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await ordersApiServices.getAllOrders()
    console.log('Orders response:', response)

    // Проверяем структуру ответа
    if (response && response.ok !== false) {
      // Если данные приходят в response.data
      if (response.data && Array.isArray(response.data)) {
        orders.value = response.data
      }
      // Если response сам является массивом
      else if (Array.isArray(response)) {
        orders.value = response
      }
      // Если response.ok и response.orders
      else if (response.orders && Array.isArray(response.orders)) {
        orders.value = response.orders
      } else {
        orders.value = []
      }
    } else {
      errorMessage.value = response?.error || 'Ошибка загрузки заявок'
    }
  } catch (error) {
    console.error('Load orders error:', error)
    errorMessage.value = error.message || 'Ошибка подключения к серверу'
  } finally {
    isLoading.value = false
  }
}

// Загрузка при монтировании компонента
onMounted(() => {
  loadOrders()
})
</script>

<style scoped>
.main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 36px 24px;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
}

.page-title {
  font-size: 22px;
  font-weight: 600;
  color: #222;
}

/* Сообщение об ошибке */
.error-message {
  background: #fee;
  border-left: 4px solid #f00;
  padding: 12px 16px;
  margin-bottom: 20px;
  border-radius: 8px;
  color: #c00;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #c00;
  padding: 0 4px;
}

.close-btn:hover {
  color: #f00;
}

/* Лоадер */
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e0e0e0;
  border-top-color: #1a3a6b;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* TABLE */
.table-card {
  background: #fff;
  border: 1px solid #000;
  border-radius: 12px;
  overflow-x: auto;
  padding: 0 20px;
}

.grid-table {
  display: grid;
  grid-template-columns: 80px 200px 180px 140px 100px 1fr;
  min-width: 900px;
}

/* Ширина столбцов */
.cell--id {
  width: 80px;
}
.cell--fio {
  width: 200px;
}
.cell--email {
  width: 180px;
}
.cell--phone {
  width: 140px;
}
.cell--date {
  width: 100px;
}
.cell--question {
  width: auto;
}

.grid-row {
  display: contents;
}

.grid-row--header .cell {
  background: #fff;
  border-bottom: 2px solid #000;
}

.cell {
  display: flex;
  align-items: center;
  padding: 16px 12px;
  font-size: 14px;
  color: #333;
  min-width: 0;
  border-bottom: 1px solid #eee;
  word-break: break-word;
}

.cell--head {
  font-weight: 600;
  color: #444;
  padding-top: 20px;
  padding-bottom: 14px;
  background: #f8f9fa;
}

/* Ховер для строк */
.grid-row:not(.grid-row--header):hover .cell {
  background: #f8faff;
}

/* Стиль для комментария */
.question-text {
  white-space: normal;
  line-height: 1.4;
}

/* Пустое состояние */
.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 48px;
  color: #999;
  font-size: 14px;
}

/* Адаптив */
@media (max-width: 1024px) {
  .main {
    padding: 24px 16px;
  }

  .table-card {
    padding: 0 12px;
  }

  .grid-table {
    grid-template-columns: 70px 180px 160px 130px 90px 1fr;
    min-width: 800px;
  }
}

@media (max-width: 768px) {
  .main {
    padding: 20px 12px;
  }

  .page-title {
    font-size: 18px;
  }

  .grid-table {
    grid-template-columns: 60px 150px 140px 120px 80px 1fr;
    min-width: 700px;
  }

  .cell {
    padding: 12px 8px;
    font-size: 12px;
  }
}
</style>
