<script setup>
import { ref } from 'vue'
import LogoName from '@/shared/components/LogoName.vue'

const menuIsShow = ref(false)

defineProps({
  textColor: {
    type: String,
  },
  headerBg: {
    type: Boolean,
  },
})

const openBurgerMenu = () => {
  menuIsShow.value = !menuIsShow.value
}
</script>

<template>
  <header class="header" :style="{ backgroundColor: headerBg ? '#a5c8e5' : '#fff' }">
    <div class="header__inner">
      <RouterLink to="/" style="text-decoration: none"><LogoName :color="textColor" /></RouterLink>
      <div class="header__button">
        <img src="/menu-btn.png" alt="menu" @click="openBurgerMenu" />
      </div>
      <div class="nav">
        <ul class="nav__list">
          <RouterLink
            to="/clinic"
            :style="{ color: headerBg ? '#fff' : '#092147' }"
            class="nav__item"
            >Клиника</RouterLink
          >
          <RouterLink
            to="/services"
            :style="{ color: headerBg ? '#fff' : '#092147' }"
            class="nav__item"
            >Услуги</RouterLink
          >
          <RouterLink
            to="/specialists"
            :style="{ color: headerBg ? '#fff' : '#092147' }"
            class="nav__item"
            >Специалисты</RouterLink
          >
          <RouterLink
            to="/fidback"
            :style="{ color: headerBg ? '#fff' : '#092147' }"
            class="nav__item"
            >Отзывы</RouterLink
          >
        </ul>
      </div>
      <div class="login">
        <!-- <button class="button button_notbg">Войти</button> -->
        <button @click="openBurgerMenu" class="button">Записаться</button>
      </div>
    </div>
  </header>
  <div class="burger-menu" :class="menuIsShow ? '' : 'burger-menu__show'">
    <ul class="burger-menu__list">
      <RouterLink to="/" @click="menuIsShow = false" class="burger-menu__item">ДентАлМакс</RouterLink>
      <RouterLink to="/clinic" @click="menuIsShow = false" class="burger-menu__item">Клиника</RouterLink>
      <RouterLink to="/services" @click="menuIsShow = false" class="burger-menu__item">Услуги</RouterLink>
      <RouterLink to="/specialists" @click="menuIsShow = false" class="burger-menu__item">Специалисты</RouterLink>
      <RouterLink to="/fidback" @click="menuIsShow = false" class="burger-menu__item">Отзывы</RouterLink>
      <RouterLink to="/makeappointment" @click="menuIsShow = false" class="burger-menu__item"><button>Записаться</button></RouterLink>
    </ul>
  </div>
</template>

<style>
.burger-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 70%;
  background: linear-gradient(to bottom, rgb(165, 200, 229), white);
  transition: 0.5s all;
  z-index: 10;
}

.burger-menu__show {
  transform: translateX(-100%);
}

.burger-menu__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  list-style-type: none;
}

.burger-menu__item {
  color: var(--bg-blue);
  font-size: 18px;
  text-decoration: none;
}

.burger-menu__item:first-child {
  font-size: 24px;
}

.burger-menu__item button {
  background: var(--bg-blue);
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: var(--text-white);
  font-size: 18px;
}

.header {
  height: 89px;
  width: 100%;
  padding: 20px 15px;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
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
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
}

.nav {
  display: none;
}

.login {
  display: flex;
  align-items: center;
}

.button {
  background: var(--bg-blue);
  border-radius: 10px;
  padding: 10px;
  color: var(--text-color);
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
    padding: 20px;
  }
}
</style>
