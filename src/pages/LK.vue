<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Pencil from '@/shared/icons/Pencil.vue'
import LoginApiService from '@/shared/api/loginApiService'

const router = useRouter()
const loginApiService = new LoginApiService()

// Данные пользователя
const userData = ref({
  id: null,
  email: '',
  fio: '',
  phone: '',
})

// Состояния
const isLoading = ref(true)
const errorMessage = ref('')
const successMessage = ref('')
const editingField = ref(null)
const editValue = ref('')
const isChangingPassword = ref(false)
const newPassword = ref('')
const confirmPassword = ref('')

// Получаем ID пользователя из localStorage
const getUserId = () => {
  const userId = localStorage.getItem('userId')
  console.log('=== getUserId ===', userId)
  return userId
}

// Загружаем данные пользователя
const loadUserData = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const userId = getUserId()

    if (!userId) {
      errorMessage.value = 'Пользователь не авторизован'
      setTimeout(() => {
        router.push('/')
      }, 2000)
      return
    }

    console.log('=== Загружаем данные для userId ===', userId)
    console.log('=== URL запроса ===', `${loginApiService.baseUrl}/api/users/${userId}/`)

    const response = await loginApiService.getUserById(userId)
    console.log('=== Полный ответ от API ===', response)

    if (response && response.ok && response.data) {
      userData.value = response.data
      console.log('=== Данные пользователя загружены ===', userData.value)
    } else {
      console.log('=== Ошибка в ответе ===', response?.error)
      errorMessage.value = response?.error || 'Ошибка загрузки данных'
    }
  } catch (error) {
    console.error('=== Ошибка при загрузке ===', error)
    console.error('=== Сообщение ошибки ===', error.message)
    errorMessage.value = error.message || 'Ошибка подключения к серверу'
  } finally {
    isLoading.value = false
  }
}

// Начать редактирование
const startEditing = (field, currentValue) => {
  editingField.value = field
  editValue.value = currentValue || ''
}

// Отмена редактирования
const cancelEditing = () => {
  editingField.value = null
  editValue.value = ''
  isChangingPassword.value = false
  newPassword.value = ''
  confirmPassword.value = ''
}

// Сохранить изменения
const saveField = async () => {
  if (!editingField.value) return

  const updateData = {}

  if (editingField.value === 'password') {
    if (newPassword.value !== confirmPassword.value) {
      errorMessage.value = 'Пароли не совпадают'
      setTimeout(() => {
        errorMessage.value = ''
      }, 3000)
      return
    }

    if (newPassword.value.length < 6) {
      errorMessage.value = 'Пароль должен содержать минимум 6 символов'
      setTimeout(() => {
        errorMessage.value = ''
      }, 3000)
      return
    }

    updateData.password = newPassword.value
  } else {
    if (editingField.value === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(editValue.value)) {
        errorMessage.value = 'Введите корректный email адрес'
        setTimeout(() => {
          errorMessage.value = ''
        }, 3000)
        return
      }
    }

    updateData[editingField.value] = editValue.value
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await loginApiService.updateUser(userData.value.id, updateData)

    if (response && response.ok && response.data) {
      if (editingField.value === 'password') {
        successMessage.value = 'Пароль успешно изменен'
        isChangingPassword.value = false
        newPassword.value = ''
        confirmPassword.value = ''
      } else {
        userData.value[editingField.value] = editValue.value
        successMessage.value = 'Данные успешно обновлены'
      }

      editingField.value = null
      editValue.value = ''

      setTimeout(() => {
        successMessage.value = ''
      }, 3000)
    } else {
      errorMessage.value = response?.error || 'Ошибка при обновлении данных'
      setTimeout(() => {
        errorMessage.value = ''
      }, 3000)
    }
  } catch (error) {
    console.error('Update error:', error)
    errorMessage.value = error.message || 'Ошибка подключения к серверу'
    setTimeout(() => {
      errorMessage.value = ''
    }, 3000)
  } finally {
    isLoading.value = false
  }
}

// Выход из аккаунта
const handleLogout = async () => {
  isLoading.value = true

  try {
    const response = await loginApiService.logout()
    console.log('Logout response:', response)

    localStorage.removeItem('userId')
    await router.push('/')
  } catch (error) {
    console.error('Logout error:', error)
    localStorage.removeItem('userId')
    await router.push('/')
  } finally {
    isLoading.value = false
  }
}

const openPasswordChange = () => {
  isChangingPassword.value = true
  editingField.value = 'password'
  newPassword.value = ''
  confirmPassword.value = ''
}

const closePasswordChange = () => {
  isChangingPassword.value = false
  editingField.value = null
  newPassword.value = ''
  confirmPassword.value = ''
}

onMounted(() => {
  loadUserData()
})
</script>

<template>
  <main>
    <h1 class="page-title">Личный кабинет</h1>

    <div v-if="errorMessage" class="message error">
      {{ errorMessage }}
    </div>

    <div v-if="successMessage" class="message success">
      {{ successMessage }}
    </div>

    <div v-if="isLoading" class="loader">
      <div class="spinner"></div>
    </div>

    <div v-else class="profile-card">
      <!-- ФИО -->
      <div class="field-row">
        <span class="field-label">ФИО:</span>
        <div class="field-input-wrap">
          <template v-if="editingField === 'fio'">
            <input
              v-model="editValue"
              class="field-input"
              type="text"
              placeholder="Фамилия Имя Отчество"
              @keyup.enter="saveField"
              @keyup.esc="cancelEditing"
              autofocus
            />
            <button class="btn-save" @click="saveField">✓</button>
            <button class="btn-cancel" @click="cancelEditing">✗</button>
          </template>
          <template v-else>
            <input class="field-input" type="text" :value="userData.fio || '—'" readonly disabled />
            <button
              class="btn-edit"
              @click="startEditing('fio', userData.fio)"
              aria-label="Редактировать ФИО"
            >
              <Pencil />
            </button>
          </template>
        </div>
      </div>

      <!-- Телефон -->
      <div class="field-row">
        <span class="field-label">Телефон:</span>
        <div class="field-input-wrap">
          <template v-if="editingField === 'phone'">
            <input
              v-model="editValue"
              class="field-input"
              type="tel"
              placeholder="+7 900 000 00 00"
              @keyup.enter="saveField"
              @keyup.esc="cancelEditing"
              autofocus
            />
            <button class="btn-save" @click="saveField">✓</button>
            <button class="btn-cancel" @click="cancelEditing">✗</button>
          </template>
          <template v-else>
            <input
              class="field-input"
              type="tel"
              :value="userData.phone || '—'"
              readonly
              disabled
            />
            <button
              class="btn-edit"
              @click="startEditing('phone', userData.phone)"
              aria-label="Редактировать телефон"
            >
              <Pencil />
            </button>
          </template>
        </div>
      </div>

      <!-- Email -->
      <div class="field-row">
        <span class="field-label">Email:</span>
        <div class="field-input-wrap">
          <template v-if="editingField === 'email'">
            <input
              v-model="editValue"
              class="field-input"
              type="email"
              placeholder="name@mail.ru"
              @keyup.enter="saveField"
              @keyup.esc="cancelEditing"
              autofocus
            />
            <button class="btn-save" @click="saveField">✓</button>
            <button class="btn-cancel" @click="cancelEditing">✗</button>
          </template>
          <template v-else>
            <input class="field-input" type="email" :value="userData.email" readonly disabled />
            <button
              class="btn-edit"
              @click="startEditing('email', userData.email)"
              aria-label="Редактировать email"
            >
              <Pencil />
            </button>
          </template>
        </div>
      </div>

      <!-- Пароль -->
      <div class="field-row">
        <span class="field-label">Пароль:</span>
        <div class="field-input-wrap">
          <template v-if="isChangingPassword">
            <input
              v-model="newPassword"
              class="field-input"
              type="password"
              placeholder="Новый пароль"
              @keyup.enter="saveField"
            />
            <input
              v-model="confirmPassword"
              class="field-input"
              type="password"
              placeholder="Подтвердите пароль"
              @keyup.enter="saveField"
            />
            <button class="btn-save" @click="saveField">✓</button>
            <button class="btn-cancel" @click="closePasswordChange">✗</button>
          </template>
          <template v-else>
            <input class="field-input" type="password" value="••••••••" readonly disabled />
            <button class="btn-edit" @click="openPasswordChange" aria-label="Редактировать пароль">
              <Pencil />
            </button>
          </template>
        </div>
      </div>
    </div>

    <button class="btn-logout" @click="handleLogout">Выйти из аккаунта</button>
  </main>
</template>

<style scoped>
main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 36px 24px;
}

.page-title {
  font-size: 22px;
  font-weight: 600;
  color: #222;
  margin-bottom: 32px;
}

.message {
  padding: 12px 16px;
  margin-bottom: 20px;
  border-radius: 8px;
  font-size: 14px;
  max-width: 600px;
}

.message.error {
  background: #fee;
  border-left: 4px solid #f00;
  color: #c00;
}

.message.success {
  background: #e8f5e9;
  border-left: 4px solid #4caf50;
  color: #2e7d32;
}

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

.profile-card {
  background: #ddeaf8;
  border-radius: 12px;
  padding: 24px 28px;
  display: inline-flex;
  flex-direction: column;
  gap: 14px;
  min-width: 420px;
}

.field-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.field-label {
  font-size: 15px;
  color: #222;
  width: 90px;
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
  min-height: 38px;
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

.field-input:disabled {
  background: transparent;
  color: #333;
}

.btn-edit {
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  color: #555;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: color 0.2s;
}

.btn-edit:hover {
  color: #1a3a6b;
}

.btn-save {
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}

.btn-save:hover {
  background: #45a049;
}

.btn-cancel {
  background: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}

.btn-cancel:hover {
  background: #da190b;
}

.btn-logout {
  margin-top: 32px;
  display: block;
  padding: 12px 24px;
  background: #1a3a6b;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-logout:hover {
  background: #24508f;
}

@media (max-width: 768px) {
  main {
    padding: 20px 16px;
  }

  .profile-card {
    min-width: auto;
    padding: 20px;
  }

  .field-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .field-label {
    width: auto;
  }

  .field-input-wrap {
    width: 100%;
  }

  .btn-logout {
    width: 100%;
  }
}
</style>
