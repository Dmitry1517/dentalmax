<script setup>
import LogoName from '@/shared/components/LogoName.vue'
import Button from '@/shared/components/Button.vue'

defineProps({
  textColor: {
    type: String,
  },
  headerBg: {
    type: Boolean,
  },
})
</script>

<template>
  <header class="header" :style="{ backgroundColor: headerBg ? '#a5c8e5' : '#fff' }">
    <div class="header__inner">
      <RouterLink to="/" style="text-decoration: none"><LogoName :color="textColor" /></RouterLink>
      <div class="header__button">
        <img src="/menu-btn.png" alt="menu" />
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
        <button class="button">Регистрация</button>
      </div>
    </div>
  </header>
</template>

<style>
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
  /* font-weight: bold; */
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
  /* .promo-desctop {
    display: flex;
  } */
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
