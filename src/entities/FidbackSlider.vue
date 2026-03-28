<template>
  <div class="slider-component">
    <!-- Slider main container -->
    <div class="slider-wrapper">
      <swiper
        :modules="modules"
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
        :navigation="navigation"
        :pagination="{ clickable: true }"
        :loop="true"
        class="custom-swiper"
        @swiper="onSwiper"
      >
        <!-- Slides -->
        <swiper-slide v-for="(slide, index) in slidesData" :key="index">
          <div class="slide-content">
            <div class="slide-image">
              <div class="slide-shortname">{{ slide.image }}</div>
            </div>
            <div class="slide-name">{{ slide.name }}</div>
            <div class="slide-stars">
              <!-- {{ slide.stars }} -->
              <ul>
                <li><Star /><Star /><Star /><Star /><Star /></li>
              </ul>
            </div>
            <div class="slide-caption">{{ slide.caption }}</div>
          </div>
        </swiper-slide>
      </swiper>

      <!-- Навигация для планшета и десктопа -->
      <div v-if="showBottomNavigation" class="bottom-navigation">
        <div class="swiper-pagination"></div>
        <!-- <div class="bottom-arrows">
          <button class="arrow-side left" @click="slidePrev">
            <ArrowLeft />
          </button>
         
          <button class="arrow-side right" @click="slideNext">
            <ArrowRight />
          </button>
        </div> -->
      </div>
    </div>
    <div class="btns-arrows">
      <!-- Левая стрелка для мобильных -->
      <button class="arrow-side left" @click="slidePrev">
        <ArrowLeft />
      </button>
      <!-- Правая стрелка для мобильных -->
      <button class="arrow-side right" @click="slideNext">
        <ArrowRight />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import required modules
import { Navigation, Pagination } from 'swiper/modules'
import ArrowLeft from '@/shared/icons/ArrowLeft.vue'
import ArrowRight from '@/shared/icons/ArrowRight.vue'
import Star from '@/shared/icons/Star.vue'

// Props
const props = defineProps({
  slides: {
    type: Array,
    default: () => [
      {
        image: 'АМ',
        name: 'Анастасия М',
        stars: 5,
        caption:
          'Хочу оставить положительный отзыв, прохожу лечение в данной стоматологии . Всё очень нравиться , чистая и уютная стоматология . Приветливый персонал. Рекомендую эту стоматологию.',
      },
      {
        image: 'ВЦ',
        name: 'Виктор Цлавов',
        stars: 5,
        caption:
          'Лучшая клиника с лучшими ценами и отличнейшими врачами. Сделали все качественно и быстро, а главное комфортно. Максим Сергеевич лучший! Буду приходить еще)',
      },
      {
        image: 'ЗГ',
        name: 'Зинаида Гришина',
        stars: 5,
        caption:
          'Приятная, чистая, небольшая стоматология. Врачи очень располагающие и приятные. Лечили кариес, реставрировали зуб, делали чистку, все прошло отлично 👍🏼',
      },
      {
        image: 'О',
        name: 'Оксана',
        stars: 5,
        caption:
          'Профессионалы своего дела, спасибо большое что вы есть, удобное расположение, доброжелательный коллектив🥰',
      },
      {
        image: 'ИК',
        name: 'Ирина Кислюк',
        stars: 5,
        caption:
          'Мой лечащий врач Максим Сергеевич - очень внимательный, на предварительной консультации всё грамотно объяснил, рассказал. Сделал протезирование коронки. Рекомендую данного хирурга - ортопеда',
      },
      {
        image: 'АБ',
        name: 'Андрей Бубеев',
        stars: 5,
        caption:
          'Спасибо большое работникам клиники за профессионализм,и очень благодарен за чуткое отношение, консультацию,решение проблем с зубами! Теперь улыбка,как у Гагарина!',
      },
      {
        image: 'ВЛ',
        name: 'Валентина Лобсанова',
        stars: 5,
        caption:
          'Спасибо большое врачу стоматологу Максиму Сергеевичу Ламуеву. Работа была выполнена настолько аккуратно,безболезненно , и быстро ,что я даже не заметила ,как все произошло. Ваши руки золото.',
      },
      {
        image: 'АН',
        name: 'Арюна Норбоева',
        stars: 5,
        caption:
          'Были в разных стоматологических клиниках, но после посещения этой, можем сказать одно-лучшая! Отличные врачи! Благодарим врачей за их профессионализм и преданность своему делу! Спасибо за улыбки моих мужа и сына!',
      },
    ],
  },
})

// Swiper modules
const modules = [Navigation, Pagination]

// Refs
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)
const swiperInstance = ref(null)

// Computed properties
const slidesData = computed(() => props.slides)

const slidesPerView = computed(() => {
  if (windowWidth.value < 537) return 1
  if (windowWidth.value < 1080) return 2
  return 3
})

const spaceBetween = computed(() => {
  if (windowWidth.value < 537) return 10
  if (windowWidth.value < 1080) return 20
  return 30
})

const showSideArrows = computed(() => windowWidth.value < 537)
const showBottomNavigation = computed(() => windowWidth.value >= 537)

const navigation = computed(() => {
  if (windowWidth.value < 537) {
    return false
  }
  return {
    nextEl: '.arrow-bottom.next',
    prevEl: '.arrow-bottom.prev',
  }
})

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

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.slider-component {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.btns-arrows {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-top: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
}

/* Slider wrapper */
.slider-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

/* Swiper container */
.custom-swiper {
  width: 100%;
  height: auto;
  position: relative;
  flex: 1;
}

/* Slide content styles */
.slide-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #bfdbf1;
  border-radius: 5px;
  overflow: hidden;
  padding: 15px;
  height: 250px;
}

.slide-content:hover {
  transform: translateY(-3px);
}

.slide-shortname {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--bg-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-white);
}

.slide-name {
  font-size: 20px;
}

.slide-stars li {
  display: flex;
  align-items: center;
  gap: 5px;
}

.slide-caption {
  /* padding: 15px;
  text-align: center; */
  font-size: 13px;
  color: #333;
  /* background: white; */
  line-height: 1.4;
}

/* Боковые стрелки для мобильных */
.arrow-side {
  width: 40px;
  height: 40px;
  border: none;
  background: #667eea;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.arrow-side:hover {
  background: #764ba2;
  transform: scale(1.1);
}

.arrow-side.left {
  order: 1;
}

.arrow-side.right {
  order: 3;
}

.custom-swiper {
  order: 2;
}

/* Навигация для планшета и десктопа */
.bottom-navigation {
  position: absolute;
  bottom: -60px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  z-index: 10;
}

.bottom-arrows {
  display: flex;
  gap: 20px;
}

.arrow-bottom {
  width: 45px;
  height: 45px;
  border: none;
  background: #667eea;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.arrow-bottom:hover {
  background: #764ba2;
  transform: scale(1.1);
}

/* Стили для пагинации Swiper */
:deep(.swiper-pagination) {
  display: none;
  position: relative !important;
  bottom: auto !important;
  margin-top: 0;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: #ddd;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: #667eea;
}

/* Скрываем стандартную навигацию Swiper */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  display: none !important;
}

/* MOBILE FIRST styles (default) */
.slider-wrapper {
  gap: 10px;
}

.bottom-navigation {
  display: none;
}

/* Планшетная версия (537px - 1079px) */
@media (min-width: 537px) {
  .slider-wrapper {
    gap: 0;
    display: block;
    padding-bottom: 50px; /* Место для навигации */
  }

  .arrow-side {
    display: none;
  }

  .bottom-navigation {
    display: flex;
  }

  .slide-content {
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    margin: 10px;
  }

  .slide-image {
    /* height: 180px; */
    font-size: 18px;
  }

  .slide-caption {
    padding: 20px;
    font-size: 16px;
  }
}

@media (min-width: 768px) {
  .slide-content {
    height: 370px;
  }
}

/* Десктопная версия (1080px+) */
@media (min-width: 1080px) {
  /* .slide-image {
    height: 200px;
  } */

  .slide-caption {
    padding: 25px;
    font-size: 17px;
  }

  .arrow-bottom {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }

  .bottom-arrows {
    gap: 25px;
  }
}

/* Большие десктопы (1200px+) */
@media (min-width: 1200px) {
  .slide-image {
    /* height: 220px; */
    font-size: 20px;
  }
}

/* Улучшения для очень маленьких мобильных */
@media (max-width: 360px) {
  .slider-wrapper {
    gap: 8px;
  }

  .arrow-side {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }

  .slide-image {
    height: 130px;
    font-size: 14px;
  }

  .slide-caption {
    padding: 12px;
    font-size: 13px;
  }
}

@media (max-width: 320px) {
  .slider-wrapper {
    gap: 5px;
  }

  .arrow-side {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
}

/* Ландшафтная ориентация на мобильных */
@media (max-width: 536px) and (orientation: landscape) {
  .slide-image {
    height: 120px;
  }

  .slide-caption {
    padding: 10px;
    font-size: 13px;
  }
}

@media (min-width: 1280px) {
  .slide-content {
    height: 400px;
  }
}
</style>
