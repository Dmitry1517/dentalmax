<script setup>
import FooterHome from '@/entities/FooterHome.vue';
import TreatmentPlan from '@/shared/components/TreatmentPlan.vue';
import SpecialistSlider from '@/entities/SpecialistSlider.vue';
</script>

<template>
    <div class="specialists">
        <div class="specialists__title">СПЕЦИАЛИСТЫ</div>
            <ul class="specialists__list">
            <li class="specialists__item">Все специалисты</li>
            <li class="specialists__item">Стоматолог-терапевт</li>
            <li class="specialists__item">Стоматолог-имплантолог</li>
            <li class="specialists__item">Стоматолог-хирург</li>
            <li class="specialists__item">Стоматолог-пародонтолог</li>
            <li class="specialists__item">Зубной техник</li>
            <li class="specialists__item">Стоматолог-ортопед</li>
            <li class="specialists__item">Стоматолог-ортодонт</li>
            <li class="specialists__item">Стоматологический гигиенист</li>
        </ul>
        <SpecialistSlider />
        <TreatmentPlan />
        <FooterHome />
    </div>
</template>

<style scoped>
.specialists__title {
    font-size: 25px;
    font-weight: 600;
    color: var(--text-blue);
    padding: 0px 20px;
}

.specialists__list {
    padding: 40px 20px;
    display: flex;
    flex-direction: row;
    gap: 15px;
    list-style-type: none;
    flex-wrap: wrap;
}

.specialists__item {
    border: 1px solid var(--bg-blue);
    color: var(--bg-blue);
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    cursor: pointer;
    width: fit-content;
}
</style>