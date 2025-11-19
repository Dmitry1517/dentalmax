<script setup>
import '@/app/style/style.css'
import LogoName from '@/shared/components/LogoName.vue';
import Button from '@/shared/components/Button.vue';
import Information from '@/shared/components/Information.vue';
import Twogis from '@/shared/icons/Twogis.vue';
import TreatmentPlan from '@/shared/components/TreatmentPlan.vue';
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
        <Button>Записаться на приём</Button>
      </div>
    </div>
    <Information 
      title="Почему нам доверяют свою улыбку?" 
      text="Забота о здоровье начинается с качественной стоматологии. Мы обеспечиваем безопасное и
        эффективное лечение, используя новейшие технологии, современные материалы и оборудование.
        Наша цель - сделать заботу о вашей улыбке доступной и комфортной."
      color="#000"
    />

    <div style="padding: 20px; color: red">Здесь будет слайдер</div>

    <Information 
      title="Полный спектр стоматологических услуг" 
      text="Мы предлагаем полный все виды стоматологической помощи для взрослых и детей."
      color="#000"
    />

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
      <Button>Подробнее об услугах</Button>
    </div>

    <div class="specialists">

      <Information 
        title="Наша команда - ваша здоровая улыбка" 
        text="Познакомьтесь с нашими высококвалифицированными специалистами."
        color="#fff"
      />
      
      <div style="padding: 20px; color: red">Здесь будет слайдер</div>
    </div>

    <div class="fidback">
      <div class="fidback__question">
        <span class="fidback__title fidback__icon"
          >Что говорят наши пациенты на <Twogis /></span>
        <span class="fidback__text">
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

    <TreatmentPlan />
  </div>
</template>

<style scoped></style>
