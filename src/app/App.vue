<script setup>
import '@/app/style/style.css'
import LogoName from '@/shared/components/LogoName.vue';
</script>

<template>
  <div>
    <div id="header">
      <div class="header">
        <div class="header__top">
          <LogoName color="#ffffff" />
          <div class="header__button">
            <img src="/menu-btn.png" alt="" />
          </div>
        </div>

        <div class="promo">
          <span class="promo__title">Качественное и безопасное лечение зубов в ДентАлМакс</span>
          <span class="promo__text">
            Мы предлагаем полный спектр стоматологических услуг, от профилактики до сложного
            протезирования, с использованием передовых технологий и материалов.
          </span>
        </div>
      </div>
      <div class="form">
        <button class="button">Записаться на приём</button>
      </div>
    </div>
    <div class="question">
      <span class="qustion__title">Почему нам доверяют свою улыбку?</span>
      <span class="qustion__text">
        Забота о здоровье начинается с качественной стоматологии. Мы обеспечиваем безопасное и
        эффективное лечение, используя новейшие технологии, современные материалы и оборудование.
        Наша цель - сделать заботу о вашей улыбке доступной и комфортной.
      </span>
    </div>

    <div style="padding: 20px; color: red">Здесь будет слайдер</div>

    <div class="question">
      <span class="qustion__title">Полный спектр стоматологических услуг</span>
      <span class="qustion__text">
        Мы предлагаем полный все виды стоматологической помощи для взрослых и детей.
      </span>
    </div>

    <div class="services">
      <div class="services__item">Консультация и диагностика</div>
      <div class="services__item">Лечение кариеса</div>
      <div class="services__item">Восстановление зубов</div>
      <div class="services__item">Протезирование</div>
      <div class="services__item">Профессиональная гигиена</div>
      <div class="services__item">Исправление прикуса</div>
      <div class="services__item">Отбеливание зубов</div>
    </div>

    <div style="display: flex; justify-content: center; padding: 5px 20px 40px 20px">
      <button class="button">Подробнее об услугах</button>
    </div>

    <div class="specialists">
      <div class="question">
        <span class="qustion__title qustion__title_spec">Наша команда - ваша здоровая улыбка</span>
        <span class="qustion__text qustion__text_spec">
          Познакомьтесь с нашими высококвалифицированными специалистами.
        </span>
      </div>
      <div style="padding: 20px; color: red">Здесь будет слайдер</div>
    </div>

    <div class="fidback">
      <div class="question">
        <span class="qustion__title qustion__title_icon"
          >Что говорят наши пациенты на <img src="/2gis-logo.png" alt="2ГИС"
        /></span>
        <span class="qustion__text">
          Познакомьтесь с нашими высококвалифицированными специалистами.
        </span>
      </div>
      <div style="padding: 20px; color: red">Здесь будет слайдер</div>
    </div>

    <div class="adress">
      <span class="adress__title">Адрес нашей клиники</span>
      <span class="adress__value">Ул. Советская 14, 1 этаж</span>
      <div class="adress__contacts">
        <span class="adress__time">Ежедневно 9:00-20:00</span>
        <span class="adress__tel">+7 950 385 22 11</span>
      </div>
      <div class="adress__geo">Здесь будет карта</div>
    </div>
  </div>
</template>

<style scoped></style>
