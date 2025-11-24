<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ArrowLeft from '@/shared/icons/ArrowLeft.vue'
import ArrowRight from '@/shared/icons/ArrowRight.vue'

// Данные слайдов
const slidesData = ref([
  {
    title: 'Современное оборудование',
    text: 'Мы проводим безопасное и комфортное лечение на оборудовании, которое отвечает строгим медицинским стандартам. Это залог точной диагностики и высоких результатов.',
  },
  {
    title: 'Опытные врачи',
    text: 'Наша команда - это специалисты с многолетним опытом, которые постоянно совершенствуют свои знания и навыки. Мы готовы решить сложные стоматологические проблемы.',
  },
  {
    title: 'Индивидуальный подход',
    text: 'Для каждого пациента мы разрабатываем персональный план лечения, учитывая пожелания по срокам, бюджету и ожидаемому результату.',
  },
  {
    title: 'Безболезненное лечение',
    text: 'Мы используем современные сертифицированные анестетики, чтобы ваше лечение прошло без боли и неприятных ощущений. Ваш комфорт - наш приоритет.',
  },
  {
    title: 'Гарантия качества',
    text: 'Мы уверены в качестве своей работы и предоставляем официальную гарантию на протезирование, имплантацию и лечение зубов.',
  },
  {
    title: 'Уютная атмосфера',
    text: 'В нашей клинике царит доброжелательная и спокойная обстановка. Для нас важно, чтобы вы чувствовали себя спокойно и были уверены в нашей поддержке на каждом этапе лечения.',
  },
])

// Refs
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)
const swiperInstance = ref(null)
const isMobile = computed(() => windowWidth.value < 537)

// Swiper modules
const modules = [Navigation]

// Methods
const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const slideNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}

const slidePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

// Lifecycle
onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<template>
  <div class="container">
    <!-- Слайдер для мобильных -->
    <div v-if="isMobile" class="slider-container">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        class="mobile-slider"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(slide, index) in slidesData" :key="index" class="slide">
          <div class="slide-content">
            <span class="slide-content__title">{{ slide.title }}</span>
            <span class="slide-content__text">{{ slide.text }}</span>
          </div>
        </swiper-slide>
      </swiper>

      <div class="slider-arrows">
        <button class="arrow prev" @click="slidePrev">
          <ArrowLeft />
        </button>
        <button class="arrow next" @click="slideNext">
          <ArrowRight />
        </button>
      </div>
    </div>

    <!-- Grid сетка для планшетов и десктопа -->
    <div v-else class="grid-container">
      <div v-for="(item, index) in slidesData" :key="index" class="grid-item">
        <div class="slide-content">
          <span class="slide-content__title">{{ item.title }}</span>
          <span class="slide-content__text">{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Стили для слайдера (мобильная версия) */
.slider-container {
  position: relative;
  padding: 40px 0;
}

.mobile-slider {
  width: 100%;
}

/* .slide {
  padding: 0 20px;
} */

.slide-content {
  border-radius: 20px;
  background: #fff;
  border: 2px solid #383b68;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px 20px;
  min-height: 300px;
}

.slide-content__title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #383b68;
  border-bottom: 1px solid #383b68;
  padding-bottom: 30px;
  width: 100%;
}

.slide-content__text {
  text-align: center;
  font-size: 15px;
  color: #383b68;
  line-height: 1.5;
}

/* Стили для стрелок */
.slider-arrows {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 20px;
}

.arrow {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.arrow:hover {
  transform: scale(1.1);
}

/* Стили для grid сетки (планшет и десктоп) */
.grid-container {
  display: grid;
  gap: 30px;
  padding: 40px 0;
}

.grid-item .slide-content {
  height: 100%;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.grid-item .slide-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(56, 59, 104, 0.15);
}

/* Медиа-запросы для планшета */
@media (min-width: 537px) and (max-width: 1079px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .slide-content {
    padding: 30px 20px;
    min-height: 280px;
  }

  .slide-content__title {
    font-size: 18px;
    padding-bottom: 20px;
  }

  .slide-content__text {
    font-size: 14px;
  }
}

/* Медиа-запросы для десктопа */
@media (min-width: 1080px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }

  .slide-content {
    padding: 40px 25px;
    min-height: 320px;
  }

  .slide-content__title {
    font-size: 20px;
    padding-bottom: 25px;
  }

  .slide-content__text {
    font-size: 15px;
  }
}

/* Большие десктопы */
@media (min-width: 1200px) {
  .slide-content {
    padding: 50px 30px;
    min-height: 350px;
  }

  .slide-content__title {
    font-size: 22px;
  }

  .slide-content__text {
    font-size: 16px;
  }
}

/* Улучшения для очень маленьких мобильных */
@media (max-width: 375px) {
  /* .slide {
    padding: 0 15px;
  } */

  .slide-content {
    padding: 30px 15px;
    min-height: 280px;
    gap: 20px;
  }

  .slide-content__title {
    font-size: 18px;
    padding-bottom: 20px;
  }

  .slide-content__text {
    font-size: 14px;
  }

  .slider-arrows {
    gap: 40px;
  }
}

/* Ландшафтная ориентация на мобильных */
@media (max-width: 536px) and (orientation: landscape) {
  .slide-content {
    min-height: 250px;
    padding: 25px 20px;
  }

  .slide-content__title {
    font-size: 18px;
    padding-bottom: 15px;
  }

  .slide-content__text {
    font-size: 14px;
  }
}

/* Скрываем стандартную навигацию Swiper */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  display: none !important;
}
</style>
