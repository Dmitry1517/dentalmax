<script setup>
import LogoName from '@/shared/components/LogoName.vue'
import Button from '@/shared/components/Button.vue'
</script>

<template>
  <header class="header">
    <div class="header__top">
      <LogoName color="#ffffff" />
      <div class="header__button">
        <img src="/menu-btn.png" alt="menu" />
      </div>
      <div class="nav">
        <ul class="nav__list">
          <li class="nav__item">Клиника</li>
          <li class="nav__item">Услуги</li>
          <li class="nav__item">Специалисты</li>
          <li class="nav__item">Отзывы</li>
        </ul>
      </div>
      <div class="login">
        <button class="button button_notbg">Войти</button>
        <button class="button">Регистрация</button>
      </div>
    </div>

    <div class="promo">
      <span class="promo__title">Качественное и безопасное лечение зубов в ДентАлМакс</span>
      <span class="promo__text">
        Мы предлагаем полный спектр стоматологических услуг, от профилактики до сложного
        протезирования, с использованием передовых технологий и материалов.
      </span>
    </div>
    <div class="form">
      <Button>Записаться на приём</Button>
    </div>
    <div class="promo-desctop">
      <div class="promo-desctop__card">
        <span class="promo-desctop__title"
          >Качественное и безопасное лечение зубов в ДентАлМакс</span
        >
        <span class="promo-desctop__text">
          Мы предлагаем полный спектр стоматологических услуг, от профилактики до сложного
          протезирования, с использованием передовых технологий и материалов.
        </span>
        <Button>Записаться на приём</Button>
      </div>
      <div class="promo-desctop__img"><img src="/tooth-all.png" alt="tooth" /></div>
    </div>
  </header>
</template>

<style>
.header {
  background-image: url('/bg.png');
  width: 100%;
  height: 525px;
  object-fit: cover; /* или contain */
}

.header__top {
  width: 100%;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo span {
  font-size: 40px;
  color: var(--text-color);
}

.header__button {
  margin-left: auto;
}

.header__button img {
  width: 35px;
  height: 35px;
}

.nav__list {
  display: flex;
  align-items: center;
  gap: 15px;
  list-style-type: none;
}

.nav__item {
  color: var(--text-color);
  font-size: 16px;
  cursor: pointer;
}

.login {
  display: flex;
  align-items: center;
}

.button {
  background: var(--bg-button);
  border-radius: 10px;
  padding: 10px;
  color: var(--text-color);
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
}

.button_notbg {
  background: none;
}

.nav,
.login {
  display: none;
}

.form {
  background-image: url('/tooth-all.png');
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: flex;
  align-items: center;
  position: absolute;
  top: 45%;
  padding: 0px 20px;
  background-repeat: no-repeat;
  background-position-x: right;
}

.promo-desctop {
  display: none;
  padding: 30px 20px;
}

.promo-desctop__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background: #fff;
  border-radius: 20px;
  padding: 25px 15px;
  text-align: center;
  align-self: flex-start;
}

.promo-desctop__title {
  font-size: 18px;
}

.promo-desctop__text {
  font-size: 12px;
}

.promo-desctop__img img {
  width: 280px;
  height: 280px;
}

@media all and (min-width: 340px) {
  .form {
    top: 28%;
  }
}

@media all and (min-width: 360px) {
  .form {
    top: 32%;
  }
}

@media all and (min-width: 370px) {
  .form {
    top: 36%;
  }
}

@media all and (min-width: 390px) {
  .form {
    top: 28%;
  }
}

@media all and (min-width: 536px) {
  .form,
  .promo {
    display: none;
  }
  .promo-desctop {
    display: flex;
  }
}

@media all and (min-width: 768px) {
  .header__button {
    display: none;
  }

  .nav {
    display: block;
  }

  .login {
    display: flex;
    align-items: center;
  }
}

@media all and (min-width: 1024px) {
  .button {
    font-size: 20px;
    padding: 15px 25px;
  }

  .nav__item {
    font-size: 20px;
  }

  .nav__list {
    gap: 20px;
  }
}

@media all and (min-width: 1280px) {
  .header__top {
    width: 1280px;
    margin: 0 auto;
  }

  .nav__list {
    gap: 40px;
  }

  .header__top {
    padding: 25px 15px;
  }
}
</style>
