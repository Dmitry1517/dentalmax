<script setup></script>

<template>
    <div class="appointment-succed">
        <span class="appointment-succed__title">Запись успешна завершена!</span>
        <span class="appointment-succed__text">
            В ближайшее время вам позвонит <br/> администратор и проконсультирует вас.
        </span>
        <div class="appointment-succed__button">
            <RouterLink to="/"><button>Вернуться на главную страницу</button></RouterLink>
        </div>
    </div>
</template>

<style scoped>
.appointment-succed {
    padding: 60px 15px;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.appointment-succed__title {
    font-size: 35px;
    font-weight: 600;
    text-align: center;
    color: var(--text-blue);
}

.appointment-succed__text {
    font-size: 22px;
    text-align: center;
    color: var(--text-blue);
}

.appointment-succed__button {
    display: flex;
    justify-content: center;
}

.appointment-succed__button button {
    background: var(--bg-blue);
    padding: 15px 30px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: var(--text-white);
    font-size: 20px;
}

@media all and (min-width: 768px) {
    .appointment-succed {
        gap: 90px;
    }
}
</style>