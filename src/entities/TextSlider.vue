<script setup>
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
                    <div class="slide-content">Слайд 1</div>
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
                <button class="arrow prev" id="prevBtn">←</button>
                <button class="arrow next" id="nextBtn">→</button>
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

/* Стили для стрелок */
.slider-arrows {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.arrow {
    width: 50px;
    height: 50px;
    border: none;
    background: #333;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: background 0.3s ease;
}

.arrow:hover {
    background: #555;
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
        height: 150px;
        font-size: 16px;
        padding: 20px 15px;
    }
    
    .arrow {
        width: 40px;
        height: 40px;
        font-size: 16px;
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