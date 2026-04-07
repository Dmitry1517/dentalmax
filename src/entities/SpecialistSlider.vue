<template>
  <div class="slider-component">
    <!-- Grid для десктопа -->
    <div v-if="isDesktop" class="grid-layout">
      <div v-for="(slide, index) in slidesData" :key="index" class="slide-content">
        <div class="slide-image">
          <img :src="slide.image" alt="doc" class="slide-fhoto-img" />
          <div class="slide-spec">Терапевт</div>
          <ArrowLink class="slide-link" />
        </div>
        <div class="slide-caption">{{ slide.caption }}</div>
      </div>
    </div>

    <!-- Swiper для мобильных и планшетов -->
    <div v-else class="slider-wrapper">
      <swiper
        :modules="modules"
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
        :pagination="{ clickable: true }"
        :loop="true"
        class="custom-swiper"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(slide, index) in slidesData" :key="index">
          <div class="slide-content">
            <div class="slide-image">
              <img :src="slide.image" alt="doc" class="slide-fhoto-img" />
              <div class="slide-spec">Терапевт</div>
              <ArrowLink class="slide-link" />
            </div>
            <div class="slide-caption">{{ slide.caption }}</div>
          </div>
        </swiper-slide>
      </swiper>

      <div style="display: flex; justify-content: center; align-items: center; gap: 60px">
        <button class="arrow-side left" @click="slidePrev">
          <ArrowLeftWhite />
        </button>
        <button class="arrow-side right" @click="slideNext">
          <ArrowRightWhite />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import ArrowLink from '@/shared/icons/ArrowLink.vue'
import ArrowLeftWhite from '@/shared/icons/ArrowLeftWhite.vue'
import ArrowRightWhite from '@/shared/icons/ArrowRightWhite.vue'

const props = defineProps({
  slides: {
    type: Array,
    default: () => [
      { image: '/public/fhoto-doc.jpg', caption: 'Фамилия Имя Отчество' },
      { image: 'Фото 2', caption: 'Фамилия Имя Отчество' },
      { image: 'Фото 3', caption: 'Фамилия Имя Отчество' },
      { image: 'Фото 4', caption: 'Фамилия Имя Отчество' },
      { image: 'Фото 5', caption: 'Фамилия Имя Отчество' },
      { image: 'Фото 6', caption: 'Фамилия Имя Отчество' },
      { image: 'Фото 7', caption: 'Фамилия Имя Отчество' },
      { image: 'Фото 8', caption: 'Фамилия Имя Отчество' },
    ],
  },
})

const modules = [Navigation, Pagination]
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)
const swiperInstance = ref(null)

const slidesData = computed(() => props.slides)
const isDesktop = computed(() => windowWidth.value >= 1080)

const slidesPerView = computed(() => {
  if (windowWidth.value < 537) return 1
  return 2
})

const spaceBetween = computed(() => {
  if (windowWidth.value < 537) return 10
  return 20
})

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const slideNext = () => swiperInstance.value?.slideNext()
const slidePrev = () => swiperInstance.value?.slidePrev()

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<style scoped>
.slider-component {
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px 10px;
  font-family: Arial, sans-serif;
}

/* ===== GRID (desktop 1080px+) ===== */
.grid-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

/* ===== ОБЩИЕ СТИЛИ КАРТОЧКИ ===== */
.slide-content {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  height: 100%;
  margin: 5px;
}

.slide-content:hover {
  transform: translateY(-3px);
}

.slide-image {
  position: relative;
  width: 256px;
  height: 320px;
  border-radius: 12px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  margin: 0 auto;
}

.slide-fhoto-img {
  width: 256px;
  height: 320px;
  object-fit: cover;
  border-radius: 10px;
}

.slide-spec {
  position: absolute;
  bottom: 10px;
  left: 12px;
  font-size: 15px;
  border-radius: 3px;
  padding: 1px 10px;
  background: var(--bg-white);
  color: var(--text-black);
}

.slide-link {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.slide-caption {
  padding: 15px;
  text-align: center;
  font-size: 18px;
  color: var(--text-white);
  line-height: 1.4;
  margin-top: 10px;
}

/* ===== SWIPER (mobile/tablet) ===== */
.slider-wrapper {
  position: relative;
}

.custom-swiper {
  width: 100%;
}

.arrow-side {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.3s ease;
  flex-shrink: 0;
  z-index: 10;
}

:deep(.swiper-pagination) {
  position: relative !important;
  bottom: auto !important;
  margin-top: 0;
  display: none;
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

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  display: none !important;
}

/* ===== ПЛАНШЕТ (537px - 1079px) ===== */
@media (min-width: 537px) and (max-width: 1079px) {
  .slider-wrapper {
    gap: 0;
    display: block;
    padding-bottom: 40px;
  }

  .slide-content {
    border-radius: 15px;
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

  :deep(.swiper-pagination) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
}

/* ===== МОБИЛЬНЫЕ ===== */
@media (max-width: 536px) {
  .slide-image {
    height: 320px;
  }

  .slide-caption {
    padding: 15px;
    font-size: 18px;
  }
}

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

@media (max-width: 536px) and (orientation: landscape) {
  .slide-image {
    height: 320px;
  }

  .slide-caption {
    padding: 10px;
    font-size: 13px;
  }
}

/* ===== GRID десктоп (1080px+) ===== */
@media (min-width: 1080px) {
  .grid-layout .slide-image {
    width: 100%;
    height: 400px;
  }

  .grid-layout .slide-fhoto-img {
    width: 100%;
    height: 400px;
  }

  .grid-layout .slide-spec {
    font-size: 20px;
  }

  .grid-layout .slide-caption {
    padding: 25px;
    font-size: 17px;
  }
}

@media (min-width: 1200px) {
  .grid-layout .slide-image {
    height: 400px;
  }

  .grid-layout .slide-fhoto-img {
    height: 400px;
  }
}
</style>