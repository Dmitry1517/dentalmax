<script setup>
import DocumentSlider from '@/entities/DocumentSlider.vue';
import FooterHome from '@/entities/FooterHome.vue';
import TreatmentPlan from '@/shared/components/TreatmentPlan.vue';
</script>

<template>
  <div class="clinic">
    <span class="title">КЛИНИКА</span>
    <!-- <section class="clinic-info">
      <span class="clinic-name">ДентАлМакс</span>
      <img src="/public/clinic-rec.png" class="clinic-img" alt="clinic-rec" srcset="/public/Clinic-rec-768.png 768w">
      <div class="clinic-banner">
        <div>
          <img class="banner-img" src="/public/banner-logo.png" alt="banner-logo">
        </div>
        <div class="banner-info">
          <div class="banner-titie">Заботимся сегодня, чтобы улыбаться завтра</div>
          <div class="banner-text">Стоматолия, где вы становитесь частью "Клуба здоровья", а не просто цациентом на один визит.</div>
        </div>
      </div>
      <span class="clinic-text">
        Добро пожаловать в нашу клинику! Мы создали место, где современные стандарты стоматологии 
        сочетаются с искренней заботой о вашем комфорте и долгосрочном здоровье.
        Мы верим, что идеальная стоматология — это не гонка за скоростью, а продуманный путь 
        к надежному результату, который будет радовать вас годами. 
      </span>
      <span class="sub-title">Миссия клиники ДентАлМакс</span>
      <span class="clinic-text">
        Построить клинику, которая меняет отношение людей к стоматологии — от страха и вынужденного 
        лечения к осознанной заботе о здоровье как части качественной жизни. Мы создаем культуру доверия, 
        где каждый пациент, с первого визита, становится частью нашего «Клуба здоровья» и получает современную, 
        предсказуемую и комфортную стоматологическую помощь на протяжении всей жизни. 
      </span>
      <span class="sub-title">О нас</span>
      <span class="clinic-text">
        Уже сегодня мы гарантируем многопрофильный командный подход, цифровой сервис, комфортную среду и технологии, 
        обеспечивающие точность и безопасность. Это наша обязательная база. Наша цель — не просто вылечить зуб, 
        а сохранить здоровье всей зубочелюстной системы пациента на десятилетия. Каждое наше решение оценивается 
        с точки зрения долгосрочной прогнозируемости. Мы верим, что современная клиника — это в первую очередь эксперты. 
        Мы инвестируем в непрерывное обучение нашей команды, создаем атмосферу коллаборации и профессиональной гордости, 
        чтобы каждый наш врач и ассистент был мотивирован делать лучший выбор для пациента. 
      </span>
      <span class="sub-title">Лицензия и документы оргранизации</span>
      <DocumentSlider />
    </section> -->
    <TreatmentPlan />
    <FooterHome />
  </div>
</template>

<style scoped>
.clinic {
  /* max-width: 1280px; */
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  /* padding: 0px 20px; */
}

.clinic-info {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 0px 20px;
}

.title {
  font-size: 25px;
  font-weight: 600;
  color: var(--text-blue);
  padding: 0px 20px;
}

.clinic-name {
  font-size: 25px;
  color: var(--text-blue);
}

.clinic-img {
  width: 100%;
  border-radius: 10px;
}

.clinic-text {
  font-size: 15px;
}

.sub-title {
  font-size: 20px;
  color: var(--text-blue);
}

.slider-title {
  font-size: 20px;
  color: var(--text-blue);
  padding:  0px 20px;
  margin: 20px 0px;
}

.clinic-banner {
  display: flex;
  align-items: center;
  background: #e6f4ff;
  padding: 50px 30px;
  gap: 30px;
  border-radius: 10px;
}

.banner-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.banner-img {
  width: 340px;
}

.banner-titie {
  font-size: 24px;
  font-weight: bold;
}
</style>

/* Заботимся сегодня, чтобы улыбаться завтра */





