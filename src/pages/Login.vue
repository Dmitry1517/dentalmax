<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LogoName from '@/shared/components/LogoName.vue'
import EmailReg from '@/shared/icons/EmailReg.vue'
import PassReg from '@/shared/icons/PassReg.vue'
import LoginApiService from '@/shared/api/loginApiService'

const router = useRouter()
const loginApiService = new LoginApiService()

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const handlerButtonLogin = async () => {
  // Очищаем предыдущее сообщение об ошибке
  errorMessage.value = ''

  // Простая валидация
  if (!email.value || !password.value) {
    errorMessage.value = 'Пожалуйста, заполните все поля'
    return
  }

  isLoading.value = true

  try {
    const response = await loginApiService.loginToAdmin(email.value, password.value)

    // Проверяем успешность входа по полю message
    if (response && response.message === 'login success') {
      try {
        const allUsers = await loginApiService.getAllUsers()
        const currentUser = allUsers.data.find((user) => user.email === email.value)
        if (currentUser) {
          localStorage.setItem('userId', currentUser.id)
        }
      } catch (err) {
        console.error('Failed to get user ID:', err)
      }
      // Перенаправляем на страницу дашборда
      await router.push('/administrator/dashboard')
    } else {
      // Если ответ не соответствует ожидаемому
      errorMessage.value = 'Неправильный логин или пароль'
    }
  } catch (error) {
    // Обрабатываем ошибки из API сервиса
    if (error.message === 'Неверный логин или пароль') {
      errorMessage.value = 'Неправильный логин или пароль'
    } else if (error.message.includes('Ошибка сервера')) {
      errorMessage.value = 'Ошибка сервера. Пожалуйста, попробуйте позже'
    } else {
      errorMessage.value = 'Произошла ошибка. Проверьте подключение к интернету'
    }
    console.error('Login error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <RouterLink to="/" style="text-decoration: none"><LogoName color="#092147" /></RouterLink>
    </div>
  </header>
  <section class="form-reg">
    <div class="form-reg__wrapper">
      <span class="form-reg__title">С возвращением</span>
      <span class="form-reg__text"
        >Откройте для себя лучший способ экономии средств с помощью ДентАлМакс</span
      >

      <div class="form-reg__input">
        <input
          type="email"
          placeholder="Введите свой Email"
          v-model="email"
          :disabled="isLoading"
          @keyup.enter="handlerButtonLogin"
        />
        <span class="form-reg__icon"><EmailReg /></span>
      </div>

      <div class="form-reg__input">
        <input
          type="password"
          placeholder="Пароль"
          v-model="password"
          :disabled="isLoading"
          @keyup.enter="handlerButtonLogin"
        />
        <span class="form-reg__icon"><PassReg /></span>
      </div>

      <div class="form-reg__pol-conf">
        <label class="checkbox">
          <input type="checkbox" class="checkbox__input" />
          <span class="checkbox__state">
            <span class="checkbox__control">
              <img src="/public/check.png" alt="check" class="checkbox__checked" />
            </span>
            <span class="checkbox__label">Запомнить меня</span>
          </span>
        </label>
      </div>

      <!-- Блок для отображения ошибок -->
      <div v-if="errorMessage" class="form-reg__error">
        {{ errorMessage }}
      </div>

      <div class="form-reg__button">
        <button
          @click="handlerButtonLogin"
          :disabled="isLoading"
          :class="{ 'button-disabled': isLoading }"
        >
          {{ isLoading ? 'Вход...' : 'Войти' }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Добавьте эти стили к существующим */

.form-reg__error {
  color: #ff0000;
  font-size: 14px;
  text-align: center;
  padding: 5px 10px;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 6px;
  margin-top: -10px;
}

.form-reg__button button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.button-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Остальные существующие стили */
.header {
  width: 100%;
  padding: 20px 15px;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.login {
  display: flex;
  align-items: center;
}

.button {
  background: var(--bg-blue);
  border-radius: 10px;
  padding: 10px 15px;
  color: var(--text-color);
  font-size: 12px;
  outline: none;
  border: none;
  cursor: pointer;
}

.button_notbg {
  background: none;
  color: var(--text-blue);
}

.form-reg {
  width: 100%;
  height: calc(100dvh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-reg__wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0px 20px;
}

.form-reg__title {
  font-weight: 600;
  font-size: 26px;
}

.form-reg__text {
  font-size: 14px;
}

.form-reg__input {
  position: relative;
}

.form-reg__input input {
  width: 100%;
  padding: 15px 15px 15px 50px;
  border-radius: 10px;
  border: 1px solid #afafaf;
  font-size: 14px;
}

.form-reg__input input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.form-reg__icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
}

input::placeholder {
  font-size: 16px;
  font-weight: 200;
}

.form-reg__button button {
  width: 100%;
  background: var(--bg-blue);
  padding: 15px 30px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: var(--text-white);
  font-size: 20px;
  font-weight: 200;
}

.form-reg__text_link {
  color: var(--text-black);
  cursor: pointer;
}

/* Checkbox */
.checkbox__input {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  opacity: 0;
}

.checkbox__state {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 20px;
}

.checkbox__control {
  width: 20px;
  min-width: 20px;
  height: 20px;
  background: var(--bg-white);
  border: 1px solid var(--text-grey-2);
  border-radius: 4px;
  display: inline-flex;
  position: relative;
}

.checkbox__label {
  color: var(--text-blue);
  font-size: 12px;
}

.checkbox__checked {
  display: none;
}

.checkbox__input:checked ~ .checkbox__state .checkbox__checked {
  display: block;
}

@media all and (min-width: 768px) {
  .form-reg {
    width: 60%;
    margin: 0 auto;
  }
  .button {
    font-size: 16px;
  }
}

@media all and (min-width: 1024px) {
  .form-reg {
    width: 40%;
    margin: 0 auto;
  }
  .form-reg__title,
  .form-reg__text {
    text-align: center;
  }
}

@media all and (min-width: 1280px) {
  .form-reg {
    width: 500px;
    margin: 0 auto;
  }

  .button {
    font-size: 20px;
  }
}
</style>
