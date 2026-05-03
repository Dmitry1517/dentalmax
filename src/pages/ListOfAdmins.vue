<template>
  <main class="main">
    <div class="page-header">
      <h1 class="page-title">Администраторы сайта</h1>
      <button class="btn-add" @click="openModal">Добавить администратора</button>
    </div>

    <!-- Сообщение об ошибке -->
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
      <button class="error-close" @click="errorMessage = ''">×</button>
    </div>

    <!-- Сообщение об успехе -->
    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
      <button class="success-close" @click="successMessage = ''">×</button>
    </div>

    <!-- Лоадер -->
    <div v-if="isLoading" class="loader">
      <div class="spinner"></div>
    </div>

    <div class="table-card" v-else>
      <div class="grid-table">
        <!-- Header -->
        <div class="grid-row grid-row--header">
          <div class="cell cell--head">ФИО</div>
          <div class="cell cell--head">Почта</div>
          <div class="cell cell--head">Телефон</div>
          <div class="cell cell--head">Действия</div>
        </div>

        <!-- Rows -->
        <div v-for="admin in admins" :key="admin.id" class="grid-row">
          <div class="cell cell--trunc">
            <span>{{ admin.fio || '—' }}</span>
          </div>
          <div class="cell cell--trunc">
            <span>{{ admin.email }}</span>
          </div>
          <div class="cell">{{ admin.phone || '—' }}</div>
          <div class="cell cell--actions">
            <button class="btn-delete" @click="confirmDelete(admin)">Удалить</button>
          </div>
        </div>

        <!-- Пустое состояние -->
        <div v-if="admins.length === 0" class="empty-state">Нет администраторов</div>
      </div>
    </div>

    <!-- Overlay -->
    <Transition name="fade">
      <div v-if="isModalOpen" class="overlay" @click.self="closeModal">
        <!-- Modal -->
        <div class="modal">
          <h2 class="modal__title">Новый администратор</h2>

          <div class="modal__fields">
            <div class="field-row">
              <span class="field-label">ФИО:</span>
              <div class="field-input-wrap">
                <input
                  v-model="form.fio"
                  class="field-input"
                  type="text"
                  placeholder="Фамилия Имя Отчество"
                />
                <Pencil />
              </div>
            </div>

            <div class="field-row">
              <span class="field-label">Телефон:</span>
              <div class="field-input-wrap">
                <input
                  v-model="form.phone"
                  class="field-input"
                  type="tel"
                  placeholder="+7 900 000 00 00"
                />
                <Pencil />
              </div>
            </div>

            <div class="field-row">
              <span class="field-label">Email:</span>
              <div class="field-input-wrap">
                <input
                  v-model="form.email"
                  class="field-input"
                  type="email"
                  placeholder="name@mail.ru"
                  required
                />
                <Pencil />
              </div>
            </div>

            <div class="field-row">
              <span class="field-label">Пароль:</span>
              <div class="field-input-wrap">
                <input
                  v-model="form.password"
                  class="field-input"
                  type="password"
                  placeholder="••••••"
                  required
                />
                <Pencil />
              </div>
            </div>
          </div>

          <div v-if="modalError" class="modal-error">
            {{ modalError }}
          </div>

          <div class="modal__actions">
            <button class="btn-ok" @click="addAdmin" :disabled="isSubmitting">
              {{ isSubmitting ? 'Добавление...' : 'Ок' }}
            </button>
            <button class="btn-cancel" @click="closeModal">Отмена</button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Confirm Delete Modal -->
    <Transition name="fade">
      <div v-if="isDeleteModalOpen" class="overlay" @click.self="closeDeleteModal">
        <div class="modal modal--small">
          <h2 class="modal__title">Подтверждение удаления</h2>
          <p class="modal__text">
            Вы уверены, что хотите удалить администратора
            <strong>{{ adminToDelete?.fio || adminToDelete?.email }}</strong
            >?
          </p>
          <div class="modal__actions">
            <button class="btn-ok" @click="deleteAdmin" :disabled="isDeleting">
              {{ isDeleting ? 'Удаление...' : 'Да, удалить' }}
            </button>
            <button class="btn-cancel" @click="closeDeleteModal">Отмена</button>
          </div>
        </div>
      </div>
    </Transition>
  </main>
</template>

<script setup>
import Pencil from '@/shared/icons/Pencil.vue'
import { ref, reactive, onMounted } from 'vue'
import LoginApiService from '@/shared/api/loginApiService'

const loginApiService = new LoginApiService()

const admins = ref([])
const isLoading = ref(false)
const isSubmitting = ref(false)
const isDeleting = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
const modalError = ref('')

const isModalOpen = ref(false)
const isDeleteModalOpen = ref(false)
const adminToDelete = ref(null)

const form = reactive({
  fio: '',
  phone: '',
  email: '',
  password: '',
})

// Загрузка списка администраторов
const loadAdmins = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await loginApiService.getUsers()
    if (response && response.ok && response.data) {
      admins.value = response.data
    } else {
      errorMessage.value = response?.error || 'Ошибка загрузки списка администраторов'
    }
  } catch (error) {
    console.error('Load admins error:', error)
    errorMessage.value = error.message || 'Ошибка подключения к серверу'
  } finally {
    isLoading.value = false
  }
}

// Открытие модального окна добавления
const openModal = () => {
  modalError.value = ''
  isModalOpen.value = true
}

// Закрытие модального окна
const closeModal = () => {
  isModalOpen.value = false
  modalError.value = ''
  form.fio = ''
  form.phone = ''
  form.email = ''
  form.password = ''
}

// Добавление администратора
const addAdmin = async () => {
  modalError.value = ''

  // Валидация
  if (!form.email) {
    modalError.value = 'Email обязателен для заполнения'
    return
  }
  if (!form.password) {
    modalError.value = 'Пароль обязателен для заполнения'
    return
  }

  // Простая валидация email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    modalError.value = 'Введите корректный email адрес'
    return
  }

  // Валидация телефона (опционально)
  if (form.phone && !/^[\+\d\s\-\(\)]{10,}$/.test(form.phone)) {
    modalError.value = 'Введите корректный номер телефона'
    return
  }

  isSubmitting.value = true

  try {
    const response = await loginApiService.createUser({
      email: form.email,
      fio: form.fio,
      phone: form.phone,
      password: form.password,
    })

    if (response && response.ok && response.data) {
      successMessage.value = `Администратор ${response.data.email} успешно добавлен`
      closeModal()
      await loadAdmins() // Перезагружаем список

      // Автоматически скрываем сообщение через 3 секунды
      setTimeout(() => {
        successMessage.value = ''
      }, 3000)
    } else {
      modalError.value = response?.error || 'Ошибка при добавлении администратора'
    }
  } catch (error) {
    console.error('Add admin error:', error)
    modalError.value = error.message || 'Ошибка подключения к серверу'
  } finally {
    isSubmitting.value = false
  }
}

// Подтверждение удаления
const confirmDelete = (admin) => {
  adminToDelete.value = admin
  isDeleteModalOpen.value = true
}

// Закрытие модального окна удаления
const closeDeleteModal = () => {
  isDeleteModalOpen.value = false
  adminToDelete.value = null
}

// Удаление администратора
const deleteAdmin = async () => {
  if (!adminToDelete.value) return

  isDeleting.value = true

  try {
    const response = await loginApiService.deleteUser(adminToDelete.value.id)

    if (response && response.ok) {
      successMessage.value = `Администратор ${adminToDelete.value.email} успешно удален`
      closeDeleteModal()
      await loadAdmins() // Перезагружаем список

      // Автоматически скрываем сообщение через 3 секунды
      setTimeout(() => {
        successMessage.value = ''
      }, 3000)
    } else {
      errorMessage.value = response?.error || 'Ошибка при удалении администратора'
      setTimeout(() => {
        errorMessage.value = ''
      }, 3000)
    }
  } catch (error) {
    console.error('Delete admin error:', error)
    errorMessage.value = error.message || 'Ошибка подключения к серверу'
    setTimeout(() => {
      errorMessage.value = ''
    }, 3000)
  } finally {
    isDeleting.value = false
  }
}

// Загрузка данных при монтировании компонента
onMounted(() => {
  loadAdmins()
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

.btn-add {
  padding: 8px 20px;
  background: #1a3a6b;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}

.btn-add:hover {
  background: #24508f;
}

/* Сообщения об ошибках и успехе */
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

.success-message {
  background: #e8f5e9;
  border-left: 4px solid #4caf50;
  padding: 12px 16px;
  margin-bottom: 20px;
  border-radius: 8px;
  color: #2e7d32;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.error-close,
.success-close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: inherit;
  padding: 0 4px;
}

.error-close:hover {
  color: #f00;
}
.success-close:hover {
  color: #2e7d32;
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
  grid-template-columns: 1fr 1fr 1fr auto;
  min-width: 600px;
}

/* Фикс для ховера - теперь кнопка остается в пределах строки */
.grid-row {
  display: contents;
}

.grid-row--header .cell {
  background: #fff;
}

.cell {
  display: flex;
  align-items: center;
  padding: 16px 12px;
  font-size: 14px;
  color: #333;
  min-width: 0;
  border-bottom: 1px solid #eee;
}

.grid-row--header .cell {
  border-bottom: 1px solid #000;
}

/* Ховер только на ячейках, но не на кнопке внутри */
.grid-row:not(.grid-row--header):hover .cell:not(.cell--actions) {
  background: #f8faff;
}

.cell--head {
  font-weight: 600;
  color: #444;
  padding-top: 20px;
  padding-bottom: 14px;
}

.cell--trunc span {
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cell--actions {
  justify-content: flex-start;
  gap: 8px;
}

.btn-delete {
  padding: 6px 16px;
  background: #1a3a6b;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}

.btn-delete:hover {
  background: #d32f2f;
}

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 48px;
  color: #999;
  font-size: 14px;
}

/* OVERLAY */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* MODAL */
.modal {
  background: #c8ddf5;
  border-radius: 16px;
  padding: 32px 36px;
  width: 500px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
}

.modal--small {
  width: 400px;
}

.modal__title {
  font-size: 18px;
  font-weight: 600;
  color: #222;
  text-align: center;
  margin-bottom: 28px;
}

.modal__text {
  font-size: 14px;
  color: #333;
  text-align: center;
  margin-bottom: 24px;
}

.modal__fields {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
}

.field-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.field-label {
  font-size: 14px;
  color: #222;
  width: 80px;
  flex-shrink: 0;
}

.field-input-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border-radius: 6px;
  padding: 7px 12px;
  flex: 1;
}

.field-input-wrap svg {
  cursor: pointer;
  flex-shrink: 0;
}

.field-input {
  border: none;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #333;
  background: transparent;
  width: 100%;
}

.field-input::placeholder {
  color: #999;
}

.modal-error {
  background: #fee;
  padding: 10px 12px;
  border-radius: 6px;
  color: #c00;
  font-size: 13px;
  margin-bottom: 20px;
}

/* MODAL BUTTONS */
.modal__actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.btn-ok {
  padding: 9px 32px;
  background: #1a3a6b;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-ok:hover:not(:disabled) {
  background: #24508f;
}

.btn-ok:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-cancel {
  padding: 9px 32px;
  background: #fff;
  color: #1a3a6b;
  border: 1.5px solid #1a3a6b;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel:hover:not(:disabled) {
  background: #f0f4fa;
}

.btn-cancel:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* TRANSITION */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Адаптив */
@media (max-width: 768px) {
  .main {
    padding: 20px 16px;
  }

  .modal {
    padding: 24px 20px;
  }

  .field-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .field-label {
    width: auto;
  }

  .field-input-wrap {
    width: 100%;
  }
}
</style>
