<script setup>
import Button from '@/shared/components/Button.vue';
import Information from '@/shared/components/Information.vue';
import Twogis from '@/shared/icons/Twogis.vue';
import TreatmentPlan from '@/shared/components/TreatmentPlan.vue';
import FooterHome from '@/entities/FooterHome.vue'
import TextSlider from '@/entities/TextSlider.vue';
import SpecialistSlider from '@/entities/SpecialistSlider.vue';
import FidbackSlider from '@/entities/FidbackSlider.vue';
import TwoGisBig from '@/shared/icons/TwoGisBig.vue';
import { onMounted } from 'vue';

onMounted(() => {
  var map;
  DG.then(function () {
    map = DG.map('map', {
      center: [51.82991, 107.57996],
      zoom: 16
    });
    DG.marker([51.82991, 107.57996]).addTo(map);
  });
})

</script>

<template>
  <!-- <div> -->
    <!-- <div id="header">
      <div class="header">
        
        <Header />

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
    </div> -->


    <!-- <div class="promo">
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
    </div> -->

    <div class="promo-mobile">
      <span class="promo-mobile__title">Качественное и безопасное лечение зубов в ДентАлМакс</span>
      <span class="promo-mobile__text">
        Мы предлагаем полный спектр стоматологических услуг, от профилактики до сложного
        протезирования, с использованием передовых технологий и материалов.
      </span>
      <img class="promo-img" src="/public/tooth-all.png" alt="tooth" />
      <div class="promo-mobile__button">
        <button ">Записаться на приём</button>
      </div>
    </div>

    

    <div class="promo-desctop">
      <!-- <img src="/public/bg.png" alt="pic" style="width: 100%; height: 580px"> -->
      <img src="/public/desctop-home-page.png" alt="pic" class="promo-desctop__pic">
      <div class="promo-desctop__card">
        <span class="promo-desctop__title">Качественное и безопасное лечение зубов в ДентАлМакс</span>
        <span class="promo-desctop__text">
          Мы предлагаем полный спектр стоматологических услуг, от профилактики до сложного
          протезирования, с использованием передовых технологий и материалов.
        </span>
        <Button>Записаться на приём</Button>
      </div>
    </div>
    

    <Information 
      title="Почему нам доверяют свою улыбку?" 
      text="Забота о здоровье начинается с качественной стоматологии. Мы обеспечиваем безопасное и
        эффективное лечение, используя новейшие технологии, современные материалы и оборудование.
        Наша цель - сделать заботу о вашей улыбке доступной и комфортной."
    />

    <TextSlider />

    <Information 
      title="Полный спектр стоматологических услуг" 
      text="Мы предлагаем полный все виды стоматологической помощи для взрослых и детей."
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


      <div class="specialists__information">
          <span class="specialists__information-title">Наша команда - ваша здоровая улыбка</span>
          <span class="specialists__information-text">Познакомьтесь с нашими высококвалифицированными специалистами.</span>
      </div>

      <!-- <div style="padding: 20px; color: red">Здесь будет слайдер</div> -->
      <SpecialistSlider />
    </div>

    <div class="fidback">
      <div class="fidback__question">
        <span class="fidback__title fidback__icon"
          >Что говорят наши пациенты на <Twogis class="fidback__small-icon"/><TwoGisBig class="fidback__big-icon" /></span>
        <!-- <span class="fidback__text">
          Познакомьтесь с нашими высококвалифицированными специалистами.
        </span> -->
      </div>
      <FidbackSlider />
      <!-- <div style="padding: 20px; color: red">Здесь будет слайдер</div> -->
    </div>

    <div class="adress">
      <span class="adress__title">Адрес нашей клиники</span>
      <span class="adress__value">Ул. Советская 14, 1 этаж</span>
      <div class="adress__contacts">
        <span class="adress__time">Ежедневно 9:00-20:00</span>
        <span class="adress__tel">+7 950 385 22 11</span>
      </div>
      <!-- Карта -->
      <div id="map" style="width:100%; height:210px"></div>
    </div>

    <TreatmentPlan />
    <FooterHome />
  <!-- </div> -->
</template>

<style scoped>

.promo-desctop {
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: none;
  background: url('/public/bg.png');
  height: 520px;
}

.promo-desctop__pic {
  width: 100%;
}

.promo-desctop__card {
  width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background: #fff;
  border-radius: 20px;
  padding: 35px 20px;
  text-align: center;
  align-self: flex-start;
  position: absolute;
  top: 20%;
  left: 20%;
}

.promo-desctop__title {
  font-size: 28px;
}

.promo-desctop__text {
  font-size: 14px;
}

.promo-mobile {
  position: relative;
  background-image: url('/public/bg.png');
  width: 100%;
  height: 525px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: 20px;
}
.promo-mobile__title {
  color: var(--text-white);
  font-size: 25px;
  padding: 0px 20px;
}

.promo-mobile__text {
  font-size: 15px;
  padding: 0px 20px;
}

.promo-mobile__button {
  position: absolute;
  top: 55%;
  left: 5%;
}

.services {
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.promo-mobile__button button {
  /* bottom: 20px; */
  background: var(--bg-blue);
  padding: 15px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: var(--text-white);
  font-size: 16px;
  font-weight: 300;
}

.services__item {
  border: 1px solid var(--bg-blue);
  color: var(--bg-blue);
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  cursor: pointer;
  width: fit-content;  
}

.specialists {
  padding: 40px 0px;
  background: var(--bg-blue);
}

.fidback {
  padding: 25px 0px;
}

.btns-arrows {
  gap: 80px;
}

@media all and (min-width: 768px) {
  .promo-mobile {
    display: none;
  }

  .promo-desctop {
    display: block;
  }

  .promo-desctop__card {
    top: 5%;
    left: 5%;
  }

  .promo-desctop__pic {
    display: block;
  }
}

@media all and (min-width: 1024px) {
  .promo-desctop__card {
    top: 15%;
    left: 10%;
  }
}

@media all and (min-width: 1280px) {
  .promo-desctop__card {
    top: 12%;
    left: 20%;
  }
  .promo-desctop__pic {
    width: 1000px;
    margin: 0 auto;
  }
  .services {
    width: 1280px;
    margin: 0 auto;
  }
}

</style>


