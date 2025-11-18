<script setup>
import Logo from '@/shared/icons/Logo.vue'
</script>

<template>
  <header class="header">
    <div class="logo">
      <Logo />
      <span>ДентАлМакс</span>
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
  </header>
</template>

<style>
.header {
  width: 1280px;
  margin: 0 auto;
  padding: 22px 0px;
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

.nav__list {
  display: flex;
  align-items: center;
  gap: 40px;
  list-style-type: none;
}
.nav__item {
  color: var(--text-color);
  font-size: 20px;
  cursor: pointer;
}

.login {
  display: flex;
  align-items: center;
}

.button {
  background: var(--bg-button);
  border-radius: 10px;
  padding: 15px 25px;
  color: var(--text-color);
  font-weight: bold;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
}

.button_notbg {
  background: none;
}
</style>
