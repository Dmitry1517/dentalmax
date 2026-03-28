<script setup>
import { ref } from 'vue'

const menuIsShow = ref(false)
</script>

<template>
  <div class="burger-menu" :class="menuIsShow ? '' : 'burger-menu__show'">
    <ul class="burger-menu__list">
      <li class="burger-menu__item">ДентАлМакс</li>
      <li class="burger-menu__item">Клиника</li>
      <li class="burger-menu__item">Услуги</li>
      <li class="burger-menu__item">Специалисты</li>
      <li class="burger-menu__item">Отзывы</li>
      <li class="burger-menu__item"><button>Записаться</button></li>
    </ul>
  </div>
</template>

<style scoped>
.burger-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 70%;
  background: linear-gradient(to bottom, rgb(165, 200, 229), white);
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
</style>
