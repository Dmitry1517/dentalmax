<script setup>
import ArrowLeft from '@/shared/icons/ArrowLeft.vue';
import ArrowRight from '@/shared/icons/ArrowRight.vue';

class Slider {
    constructor() {
        this.slider = document.getElementById('slider');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.totalSlides = this.slides.length;
        
        this.init();
    }
    
    init() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Добавляем обработчики для свайпов на мобильных
        this.addSwipeSupport();
        
        this.updateSlider();
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlider();
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlider();
    }
    
    updateSlider() {
        const slideWidth = 100; // 100% ширины контейнера
        const translateX = -this.currentSlide * slideWidth;
        this.slider.style.transform = `translateX(${translateX}%)`;
    }
    
    addSwipeSupport() {
        let startX = 0;
        let endX = 0;
        
        this.slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.slider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
        });
    }
    
    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }
}
        
// Автоматическое переключение между слайдером и сеткой при изменении размера окна
function handleResize() {
    const sliderContainer = document.querySelector('.slider-container');
    const gridContainer = document.getElementById('gridContainer');
    const width = window.innerWidth;
    
    if (width < 537) {
        sliderContainer.style.display = 'block';
        gridContainer.style.display = 'none';
    } else {
        sliderContainer.style.display = 'none';
        gridContainer.style.display = 'grid';
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    new Slider();
    handleResize();
    window.addEventListener('resize', handleResize);
});


</script>

<template>
    <div class="container">
        
        <!-- Слайдер для мобильных -->
        <div class="slider-container">
            <div class="slider" id="slider">
                <div class="slide">
                    <div class="slide-content">
                        <span class="slide-content__title">Современное оборудование</span>
                        <span class="slide-content__text">
                            Мы проводим безопасное и комфортное лечение на оборудовании, которое отвечает строгим медецинским
                            стандартам. Это залог точной диагностики и высоких результатов.
                        </span>
                    </div>
                </div>
                <div class="slide">
                    <div class="slide-content">Слайд 2</div>
                </div>
                <div class="slide">
                    <div class="slide-content">Слайд 3</div>
                </div>
                <div class="slide">
                    <div class="slide-content">Слайд 4</div>
                </div>
                <div class="slide">
                    <div class="slide-content">Слайд 5</div>
                </div>
                <div class="slide">
                    <div class="slide-content">Слайд 6</div>
                </div>
            </div>
            
            <div class="slider-arrows">
                <div class="arrow prev" id="prevBtn"><ArrowLeft /></div>
                <div class="arrow next" id="nextBtn"><ArrowRight /></div>
            </div>
        </div>
        
        <!-- Grid сетка для планшетов и десктопа -->
        <div class="grid-container" id="gridContainer">
            <div class="grid-item">Элемент 1</div>
            <div class="grid-item">Элемент 2</div>
            <div class="grid-item">Элемент 3</div>
            <div class="grid-item">Элемент 4</div>
            <div class="grid-item">Элемент 5</div>
            <div class="grid-item">Элемент 6</div>
        </div>
    </div>
</template>

<style>
.container {
    max-width: 1200px;
    margin: 0 auto;
}

/* Стили для слайдера (мобильная версия) */
.slider-container {
    position: relative;
    overflow: hidden;
    padding: 40px 0px;
}

.slider {
    display: flex;
    transition: transform 0.3s ease;
}

.slide {
    flex: 0 0 100%;
    min-width: 100%;
    padding: 15px;
}

.slide-content {
    border-radius: #383b68;
    background: #fff;
    border-radius: 20px;
    border: 2px solid #383b68;
    display: flex;
    flex-direction: column;
    gap: 30px;
}



/* Стили для стрелок */
.slider-arrows {
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-top: 20px;
}

/* Стили для grid сетки (планшет и десктоп) */
.grid-container {
    display: none;
    gap: 20px;
}

.grid-item {
    background: #f0f0f0;
    border-radius: 10px;
    padding: 30px 20px;
    text-align: center;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
}

/* Медиа-запросы */
@media (min-width: 537px) and (max-width: 1079px) {
    .slider-container {
        display: none;
    }
    
    .grid-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1080px) {
    .slider-container {
        display: none;
    }
    
    .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Резиновая верстка для мобильных */
@media (max-width: 536px) {
    .slide {
        padding: 0px 20px;
    }
    
    .slide-content {
        padding: 40px 20px;
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
    }
    
}

@media (max-width: 375px) {
    .slide-content {
        height: 120px;
        font-size: 14px;
        padding: 15px 10px;
    }
}
</style>