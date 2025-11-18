<script setup>
import Header from '@/entities/Header.vue'
</script>

<template>
  <section class="form">
    <Header />
    <div class="promo">
      <div class="baner">
        <h3 class="baner__title">
          Качественное и безопасное<br />
          лечение зубов в ДентАлМакс
        </h3>
        <p class="baner__text">
          Мы предлагаем полный спектр стоматологических<br />
          услуг, от профилактики до сложного протезирования,<br />
          с использованием передовых технологий и материалов.
        </p>
        <button class="baner__button button">Записаться на прием</button>
      </div>
      <div class="tooth">
        <img src="/tooth.png" alt="tooth" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.form {
  background-image: url('/bg-fon.png');
}
.promo {
  display: flex;
  align-items: center;
  width: 1280px;
  margin: 0 auto;
  padding: 0px 70px;
}
.baner {
  background: var(--bg-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 25px;
  gap: 50px;
}
.baner__title {
  font-size: 35px;
  text-align: center;
}
.baner__text {
  text-align: center;
  font-size: 20px;
}

.tooth {
  flex: 1;
}
</style>
