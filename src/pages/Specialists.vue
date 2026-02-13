<script setup>
import FooterHome from '@/entities/FooterHome.vue';
import TreatmentPlan from '@/shared/components/TreatmentPlan.vue';
import SpecialistSlider from '@/entities/SpecialistSlider.vue';
</script>

<template>
    <div class="specialists">
        <div class="specialists__title">СПЕЦИАЛИСТЫ</div>
        <span class="specialists-name">
            <span class="clinic__brad">Главная</span>
            <span class="clinic__brad"> > </span>
            <span class="clinic__brad">Специалисты</span>
        </span>
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
    </div>
    <TreatmentPlan />
    <FooterHome />
</template>

<style scoped>
.specialists {
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
}
.specialists__title {
    font-size: 25px;
    font-weight: 600;
    color: var(--text-blue);
    padding: 0px 20px;
}

.specialists-name {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--text-grey-4);
  padding: 0px 20px;
  margin-top: 20px;
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

@media all and (min-width: 1280px) {
    .specialists {
        width: 1280px;
    }
}
</style>