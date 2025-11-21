<script setup>
import LogoName from '@/shared/components/LogoName.vue'
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

.nav, .login {
  display: none;
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
