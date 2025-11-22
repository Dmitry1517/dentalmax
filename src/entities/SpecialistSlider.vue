<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import ArrowRightWhite from '@/shared/icons/ArrowRightWhite.vue'
import ArrowLeftWhite from '@/shared/icons/ArrowLeftWhite.vue'

const props = defineProps({
  slides: {
    type: Array,
    default: () => [
      {
        image: 'Фото 1',
        caption:
          'Фамилия Имя Отчество                                                                                                                       ',
      },
      { image: 'Фото 2', caption: 'Горный пейзаж' },
      { image: 'Фото 3', caption: 'Городская архитектура' },
      { image: 'Фото 4', caption: 'Лесная тропинка' },
      { image: 'Фото 5', caption: 'Ночной город' },
      { image: 'Фото 6', caption: 'Зимний лес' },
      { image: 'Фото 7', caption: 'Весенний сад' },
      { image: 'Фото 8', caption: 'Пустынный пейзаж' },
    ],
  },
})

const modules = [Navigation, Pagination]

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)
const swiperInstance = ref(null)

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
  <div class="slider-component">
    <!-- Slider main container -->
    <div class="slider-wrapper">
      <!-- Левая стрелка для мобильных -->
      <button v-if="showSideArrows" class="arrow-side left" @click="slidePrev">
        <ArrowLeftWhite />
      </button>

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
            <div class="slide-image">{{ slide.image }}</div>
            <div class="slide-caption">{{ slide.caption }}</div>
          </div>
        </swiper-slide>
      </swiper>

      <!-- Правая стрелка для мобильных -->
      <button v-if="showSideArrows" class="arrow-side right" @click="slideNext">
        <ArrowRightWhite />
      </button>

      <!-- Навигация для планшета и десктопа -->
      <div v-if="showBottomNavigation" class="bottom-navigation">
        <div class="swiper-pagination"></div>
        <div class="bottom-arrows">
          <button class="arrow-bottom prev" @click="slidePrev">←</button>
          <button class="arrow-bottom next" @click="slideNext">→</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-component {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
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
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
  margin: 5px;
}

.slide-content:hover {
  transform: translateY(-3px);
}

.slide-image {
  width: 100%;
  height: 320px;
  border-radius: 12px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

.slide-caption {
  padding: 15px;
  text-align: center;
  font-size: 17px;
  color: #fff;
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
    padding-bottom: 80px; /* Место для навигации */
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
    height: 320px;
    font-size: 18px;
  }

  .slide-caption {
    padding: 20px;
    font-size: 16px;
  }
}

/* Десктопная версия (1080px+) */
@media (min-width: 1080px) {
  .slide-image {
    height: 320px;
  }

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
    height: 320px;
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
    height: 320px;
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
    height: 320px;
  }

  .slide-caption {
    padding: 10px;
    font-size: 13px;
  }
}
</style>
