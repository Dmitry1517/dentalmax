<script setup>
import LogoName from '@/shared/components/LogoName.vue'
import EmailReg from '@/shared/icons/EmailReg.vue'
import PassReg from '@/shared/icons/PassReg.vue'
// import StomsApiService from '@/app/api/dentalmaxApiService'
// import { useDentalStore } from '@/app/stores/store'

</script>

<template>
  <header class="header">
    <div class="header__inner">
      <RouterLink to="/" style="text-decoration: none"><LogoName color="#092147" /></RouterLink>
      <div class="login">
        <!-- <button class="button button_notbg">Войти</button>
        <button class="button">Регистрация</button> -->
      </div>
    </div>
  </header>
  <section class="form-reg">
    <div class="form-reg__wrapper">
      <span class="form-reg__title">С возвращением</span>
      <span class="form-reg__text"
        >Откройте для себя лучший способ экономии средств с помощью ДентАлМакс</span>

      <div class="form-reg__input">
        <input type="text" placeholder="Введите свой Email" />
        <span class="form-reg__icon"><EmailReg /></span>
      </div>
      <div class="form-reg__input">
        <input type="text" placeholder="Пароль" />
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
      <div class="form-reg__button">
        <RouterLink to="/administrator/dashboard"
          ><button @click="logToAdmin">Войти</button></RouterLink
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
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
