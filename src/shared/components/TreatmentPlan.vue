<script setup></script>

<template>
    <div class="treatmentplan">
        <div class="treatmentplan__inner">
            <div class="treatmentplan__info">
                <span class="treatmentplan__title">Составим план лечения</span>
                <span class="treatmentplan__text">Проанализируем состояние ваших <br/> зубов и дадим рекомендации</span>
            </div>
            <div class="treatmentplan__button">
                <button>Записаться на приём</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.treatmentplan { 
    padding: 50px 0px;
}

.treatmentplan__inner {
    background: var(--bg-treatmentplan);
    padding: 35px 0px;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.treatmentplan__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0px 20px;
    color: var(--text-white);
}

.treatmentplan__title {
    font-size: 24px;
}

.treatmentplan__text {
    font-size: 16px;
    font-weight: 300;
}

.treatmentplan__button {
    padding: 0px 20px;
}

.treatmentplan__button button {
    background: var(--bg-white);
    padding: 15px 30px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: var(--text-blue);
    font-size: 20px;
}

@media all and (min-width: 768px) {
    .treatmentplan__button,
    .treatmentplan__title,
    .treatmentplan__text {
        text-align: center;
    }
    .treatmentplan__title {
        font-size: 30px;
    }
    .treatmentplan__text {
        font-size: 22px;
    }
}
</style>