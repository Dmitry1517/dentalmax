<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import FooterHome from '@/entities/FooterHome.vue'
import OrdersApiServices from '@/shared/api/ordersApiServices'

const router = useRouter()
const ordersApiServices = new OrdersApiServices()

// Форма
const formData = ref({
  fio: '',
  email: '',
  phone: '',
  date: '',
  question: '',
})

// Согласия
const consentNewsletter = ref(false)
const consentPersonalData = ref(false)

// Состояния
const isLoading = ref(false)
const errorMessage = ref('')

// Валидация
const validateForm = () => {
  if (!formData.value.fio.trim()) {
    errorMessage.value = 'Пожалуйста, укажите ФИО'
    return false
  }

  if (!formData.value.email.trim()) {
    errorMessage.value = 'Пожалуйста, укажите email'
    return false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
    errorMessage.value = 'Введите корректный email адрес'
    return false
  }

  if (!formData.value.phone.trim()) {
    errorMessage.value = 'Пожалуйста, укажите номер телефона'
    return false
  }

  const phoneRegex = /^[\+\d\s\-\(\)]{10,}$/
  if (!phoneRegex.test(formData.value.phone)) {
    errorMessage.value = 'Введите корректный номер телефона'
    return false
  }

  if (!formData.value.date) {
    errorMessage.value = 'Пожалуйста, выберите дату посещения'
    return false
  }

  if (!consentPersonalData.value) {
    errorMessage.value = 'Необходимо дать согласие на обработку персональных данных'
    return false
  }

  return true
}

// Отправка формы
const submitOrder = async () => {
  errorMessage.value = ''

  if (!validateForm()) {
    setTimeout(() => {
      errorMessage.value = ''
    }, 3000)
    return
  }

  isLoading.value = true

  try {
    const orderData = {
      fio: formData.value.fio.trim(),
      email: formData.value.email.trim(),
      phone: formData.value.phone.trim(),
      date: formData.value.date,
      question: formData.value.question.trim() || '',
    }

    const response = await ordersApiServices.createOrder(orderData)

    if (response && response.ok !== false) {
      // Сразу редиректим на страницу успеха
      await router.push('/appointment-completed')
    } else {
      errorMessage.value = response?.error || 'Ошибка при отправке заявки'
      setTimeout(() => {
        errorMessage.value = ''
      }, 3000)
    }
  } catch (error) {
    console.error('Submit order error:', error)
    errorMessage.value = error.message || 'Ошибка подключения к серверу'
    setTimeout(() => {
      errorMessage.value = ''
    }, 3000)
  } finally {
    isLoading.value = false
  }
}

// Инициализация карты
onMounted(() => {
  var map
  DG.then(function () {
    map = DG.map('map', {
      center: [51.82991, 107.57996],
      zoom: 16,
    })
    DG.marker([51.82991, 107.57996]).addTo(map)
  })
})
</script>

<template>
  <div class="appointment">
    <h1 class="appointment__title">Запись на приём</h1>

    <!-- Сообщение об ошибке -->
    <div v-if="errorMessage" class="message error">
      {{ errorMessage }}
      <button class="message-close" @click="errorMessage = ''">×</button>
    </div>

    <div class="appointment__wrapper">
      <section class="left-side">
        <div class="left-side__map">
          <div id="map" style="width: 100%; height: 460px"></div>
        </div>
        <ul class="left-side__list">
          <li class="left-side__item left-side__item_deck">
            <div class="left-side__icon"><img src="/public/point-map.png" alt="point" /></div>
            <div class="left-side__info">
              <span class="left-side__title">Адрес клиники</span>
              <span class="left-side__text">ул. Советская 14, 1 этаж</span>
            </div>
          </li>
          <li class="left-side__item">
            <img src="/public/clock.png" alt="clock" />
            <div class="left-side__info">
              <span class="left-side__title">Открыты</span>
              <span class="left-side__text">Ежедневно с 9:00 до 20:00</span>
            </div>
          </li>
          <li class="left-side__item">
            <div class="left-side__icon"><img src="/public/point-map.png" alt="point" /></div>
            <div class="left-side__info">
              <span class="left-side__title">Наша почта</span>
              <span class="left-side__text">Smile01@gmail.com</span>
            </div>
          </li>
          <li class="left-side__item">
            <div class="left-side__icon"><img src="/public/phone.png" alt="phone" /></div>
            <div class="left-side__info">
              <span class="left-side__title">Наш телефон</span>
              <span class="left-side__text">+7 950 385 22 11</span>
            </div>
          </li>
        </ul>
      </section>
      <ul class="left-side__list left-side__list_mobile">
        <li class="left-side__item">
          <div class="left-side__icon"><img src="/public/point-map.png" alt="point" /></div>
          <div class="left-side__info">
            <span class="left-side__title">Адрес клиники</span>
            <span class="left-side__text">ул. Советская 14, 1 этаж</span>
          </div>
        </li>
        <li class="left-side__item">
          <img src="/public/clock.png" alt="clock" />
          <div class="left-side__info">
            <span class="left-side__title">Открыты</span>
            <span class="left-side__text">Ежедневно с 9:00 до 20:00</span>
          </div>
        </li>
        <li class="left-side__item">
          <div class="left-side__icon"><img src="/public/point-map.png" alt="point" /></div>
          <div class="left-side__info">
            <span class="left-side__title">Наша почта</span>
            <span class="left-side__text">Smile01@gmail.com</span>
          </div>
        </li>
        <li class="left-side__item">
          <div class="left-side__icon"><img src="/public/phone.png" alt="phone" /></div>
          <div class="left-side__info">
            <span class="left-side__title">Наш телефон</span>
            <span class="left-side__text">+7 950 385 22 11</span>
          </div>
        </li>
      </ul>

      <form class="appointment__form" @submit.prevent="submitOrder">
        <div class="user-fields">
          <label class="user-field">
            <span class="user-field__title"
              >Фамилия Имя Отчество <span class="required">*</span></span
            >
            <input
              class="user-field__input"
              type="text"
              placeholder="Ваше ФИО"
              v-model="formData.fio"
              :disabled="isLoading"
            />
          </label>

          <label class="user-field">
            <span class="user-field__title">Email <span class="required">*</span></span>
            <input
              class="user-field__input"
              type="email"
              placeholder="you@mail.ru"
              v-model="formData.email"
              :disabled="isLoading"
            />
          </label>

          <label class="user-field">
            <span class="user-field__title"
              >Ваш номер телефона <span class="required">*</span></span
            >
            <input
              class="user-field__input"
              type="tel"
              placeholder="+7 (900) 000-0000"
              v-model="formData.phone"
              :disabled="isLoading"
            />
          </label>

          <label class="user-field">
            <span class="user-field__title"
              >Выберите предварительную дату посещения <span class="required">*</span></span
            >
            <div style="position: relative">
              <input
                id="select-date"
                class="user-field__input"
                type="date"
                v-model="formData.date"
                :disabled="isLoading"
                :min="new Date().toISOString().split('T')[0]"
              />
              <img src="/public/chevron-down.png" alt="down" class="user-field__down" />
            </div>
          </label>
        </div>

        <label class="user-field">
          <span class="user-field__title">Вопрос обращения, наименование услуги</span>
          <textarea
            class="user-field__input user-field__textarea"
            placeholder="Опишите ваш вопрос или укажите услугу"
            v-model="formData.question"
            :disabled="isLoading"
          ></textarea>
        </label>

        <label class="checkbox">
          <input
            type="checkbox"
            class="checkbox__input"
            v-model="consentNewsletter"
            :disabled="isLoading"
          />
          <span class="checkbox__state">
            <span class="checkbox__control">
              <img src="/public/check.png" alt="check" class="checkbox__checked" />
            </span>
            <span class="checkbox__label">Я даю согласие на рассылку</span>
          </span>
        </label>

        <label class="checkbox">
          <input
            type="checkbox"
            class="checkbox__input"
            v-model="consentPersonalData"
            :disabled="isLoading"
          />
          <span class="checkbox__state">
            <span class="checkbox__control">
              <img src="/public/check.png" alt="check" class="checkbox__checked" />
            </span>
            <span class="checkbox__label"
              >Я даю согласие на <b class="checkbox__label_bold">обработку персональных данных</b>
              <span class="required">*</span></span
            >
          </span>
        </label>

        <p class="appointment__text">
          <span class="required">*</span> - поля обязательные для заполнения
        </p>

        <p class="appointment__text">
          Нажимая кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь с
          политикой конфиденциальности.
        </p>

        <!-- Компонент кнопки -->
        <div class="form__button">
          <button type="submit" :disabled="isLoading">
            {{ isLoading ? 'Отправка...' : 'Записаться на приём' }}
          </button>
        </div>
      </form>
    </div>
  </div>
  <FooterHome />
</template>

<style scoped>
.appointment__title {
  font-size: 25px;
  font-weight: 600;
  color: var(--text-blue);
  padding: 0px 20px;
}

/* Сообщение об ошибке */
.message {
  padding: 12px 16px;
  margin: 20px 20px 0 20px;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: slideIn 0.3s ease;
}

.message.error {
  background: #fee;
  border-left: 4px solid #f00;
  color: #c00;
}

.message-close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: inherit;
  padding: 0 4px;
}

.message-close:hover {
  opacity: 0.7;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.required {
  color: #f00;
  font-size: 14px;
}

.left-side {
  display: none;
}

.left-side__list {
  display: none;
}

.appointment__form {
  margin: 40px 0px;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* Компонент user-field */

.user-fields {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.user-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.user-field__title {
  color: var(--text-grey-1);
  font-size: 18px;
  font-weight: 500;
}

.user-field__input {
  width: 100%;
  border: 1px solid var(--text-light-grey);
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 10px;
  padding: 20px 16px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
}

.user-field__input:disabled {
  background: #f5f5f5;
  cursor: not-allowed;
}

.user-field__input::placeholder {
  color: var(--text-grey-3);
}

.user-field__textarea {
  resize: none;
  height: 120px;
}

.user-field__down {
  position: absolute;
  width: 25px;
  height: 25px;
  right: 15px;
  top: 20px;
  pointer-events: none;
}

/* CHECKBOX */

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

input[type='date'] {
  font-family: 'Inter', sans-serif;
  color: var(--text-grey-3);
  font-size: 17px;
}

input[type='date']::-webkit-datetime-edit {
  font-family: 'Inter', sans-serif;
  color: var(--text-grey-3);
  font-size: 17px;
}

input[type='date']::-webkit-calendar-picker-indicator {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.checkbox__label {
  color: var(--text-blue);
  font-size: 17px;
}

.checkbox__checked {
  display: none;
}

.checkbox__input:checked ~ .checkbox__state .checkbox__checked {
  display: block;
}

.appointment__text {
  color: var(--text-blue);
  font-size: 13px;
}

.form__button {
  display: flex;
  justify-content: center;
}

.form__button button {
  background: var(--bg-blue);
  padding: 15px 30px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: var(--text-white);
  font-size: 20px;
  transition: background 0.2s;
}

.form__button button:hover:not(:disabled) {
  background: #24508f;
}

.form__button button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media all and (min-width: 768px) {
  .appointment__form {
    padding: 0px 60px;
  }

  .user-field__title {
    font-size: 22px;
  }

  .left-side__list {
    padding: 0px 60px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-top: 30px;
  }

  .left-side__item {
    display: flex;
    align-items: center;
    gap: 15px;
    background: var(--bg-white);
    border-radius: 8px;
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.03),
      0 4px 12px rgba(0, 0, 0, 0.04);
    padding: 15px;
  }

  .left-side__info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .left-side__title {
    font-size: 18px;
    font-weight: 600;
  }

  .left-side__text {
    font-size: 16px;
  }
}

@media all and (min-width: 1280px) {
  .appointment {
    width: 1280px;
    margin: 0 auto;
  }

  .appointment__title {
    padding: 0px 0px;
  }

  .message {
    margin: 0 0 20px 0;
  }

  .appointment__wrapper {
    display: flex;
    gap: 30px;
    padding: 30px 0px 60px 0px;
  }

  .appointment__form {
    border: 1px solid var(--bg-blue);
    border-radius: 10px;
    padding: 40px;
    margin: 0px;
    gap: 20px;
  }
  .user-fields {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .user-field__title {
    font-size: 20px;
  }

  .user-field__input {
    padding: 16px;
  }

  .left-side {
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
  }

  .left-side__map {
    width: 550px;
  }

  .left-side__list {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px;
    margin-top: 0px;
  }
  .left-side__list_mobile {
    display: none;
  }

  .left-side__item_deck {
    position: absolute;
    top: 350px;
    left: 20px;
    right: 20px;
  }
}
</style>
